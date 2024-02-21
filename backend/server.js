const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs')
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const dbUri = require('./configs/keys').dbURI;
const secretKey = require('./configs/keys').secretKey;
const adminSecretKey = require('./configs/keys').adminSecretKey;
const Users = require('./models/User');
const Admin = require('./models/Admin');
const Blog = require('./models/Blog');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

const upload = multer({ dest: 'uploads/' });

const connectDb = async () => {
    await mongoose.connect(dbUri);
    console.log(`Data connected successfully`);
    app.listen(5000, () => {
        console.log('Server running on port 5000');
    })
}

connectDb();

const verifyToken = (req, res, next) => {
    const { token } = req.cookies;
    jwt.verify(token, secretKey, {}, (err, info) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Please login to perform this action"
            });
        }
        req.userInfo = info;
        next();
    });
};

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username && !password && !email) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the input fields"
        })
    }

    try {
        const userExists = await Users.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'A user with this email already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            username,
            password: hashedPassword,
            email
        });

        await newUser.save();

        res.json({
            success: true,
            user: 'User Registered Successfully'
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({
            success: false,
            message: 'Please use another username, this username has been picked'
        });
    }
});

app.post('/login', async (req, res) => {
    const { password, email } = req.body;

    if (!email && !password) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the input fields"
        })
    }

    try {
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'A user with this email has not been registered'
            })
        }

        const passwordMatched = await bcrypt.compare(password, user.password);

        if (passwordMatched) {
            jwt.sign({ username: user.username, id: user._id }, secretKey, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    success: true,
                    id: user._id,
                    username: user.username
                });
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Incorrect password"
            })
        }

        
    } catch (error) {
        console.error('Error logging in user:', error);
        
    }
})

app.get('/profile', verifyToken, (req, res) => {
    if (req.userInfo) {
        res.json({
            success: true,
            userInfo: req.userInfo
        });
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json({
        success: false,
        message: 'ok'
    })
})


// Blog Api

app.post('/post', verifyToken, upload.single('avatar'), async (req, res) => {
    const info = req.userInfo;
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all the neccessary fields and also choose an image to upload.'
        });
    }

    let newPath;
    const { originalname, path } = req.file;
    const ext = originalname.split('.')[1];
    newPath = `${path}.${ext}`;

    try {
        fs.renameSync(path, newPath);
    } catch (err) {
        console.error('Error renaming file:', err);
        return res.status(500).json({
            success: false,
            message: 'Error renaming file.'
        });
    }

    const { title, snippet, content, category } = req.body;
    const blog = await Blog.create({
        title,
        snippet,
        content,
        category,
        cover: newPath,
        author: info.id
    });

    res.json({
        success: true,
        data: blog
    });
});

app.put('/edit/:id', verifyToken, upload.single('avatar'), async (req, res) => {
    const { title, snippet, content, category } = req.body;
    const { id } = req.params;

    let newPath;
    if (req.file) {
        const { originalname, path } = req.file;
        const ext = originalname.split('.')[1];
        newPath = `${path}.${ext}`;

        try {
            fs.renameSync(path, newPath);
        } catch (err) {
            console.error('Error renaming file:', err);
            return res.status(500).json({
                success: false,
                message: 'Error renaming file.'
            });
        }
    }

    const updatedFields = {
        title,
        snippet,
        content,
        category,
        ...(newPath && { cover: newPath })
    };

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, updatedFields, { new: true });

        res.json({
            success: true,
            data: updatedBlog
        });
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating blog.'
        });
    }
});

app.get('/blogs', async (req, res) => {
    const blogs = await Blog.find()
        .sort({createdAt: -1})
        .populate('author', ["username"]);

    if (blogs) {
        res.status(200).json({
            success: true,
            data: blogs
        })
    }
})

app.get('/blog/:id', async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findOne({ _id: id }).populate('author', ['username']);

    if (blog) {
        res.status(200).json({
            success: true,
            data: blog
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Blog not found'
        });
    }
});


app.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Blog.findById(id)
    .populate('author', ['username']);

    res.json({
        success: true,
        message: postDoc
    })
})

app.delete('/blog/:id',  async (req, res) => {
    const { id } = req.params;
    try {
        await Blog.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Blog deleted"
        })

    } catch (error) {
        res.json({
            success: false,
            message: `Failed to delete user`
        })
    }

})


// Admin Section

const verifyAdminToken = (req, res, next) => {
    const { token } = req.cookies;
    jwt.verify(token, adminSecretKey, {}, (err, info) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Please login to perform this action"
            });
        }
        req.adminInfo = info;
        next();
    });
};

app.post('/admin/register', async (req, res) => {
    const { admin_name, password, email } = req.body;

    if (!admin_name && !password && !email) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the input fields"
        })
    }

    try {
        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            return res.status(400).json({
                success: false,
                message: 'An admin with this email already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({
            admin_name,
            password: hashedPassword,
            email
        });

        await newAdmin.save();

        res.json({
            success: true,
            user: 'Admin Registered Successfully'
        });
    } catch (error) {
        console.error('Error registering admin:', error);
        res.status(500).json({
            success: false,
            message: 'Please pick another admin name, this one has been picked'
        });
    }
});

app.post('/admin/login', async (req, res) => {
    const { password, email } = req.body;

    if (!email && !password) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the input fields"
        })
    }

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({
                success: false,
                message: 'An Admin with this email has not been registered'
            })
        }

        const passwordMatched = await bcrypt.compare(password, admin.password);

        if (passwordMatched) {
            jwt.sign({ admin_name: admin.admin_name, id: admin._id }, adminSecretKey, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    success: true,
                    id: admin._id,
                    admin_name: admin.admin_name
                });
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Incorrect password"
            })
        }

        
    } catch (error) {
        console.error('Error logging in Admin:', error);
    }
})

// Get all users

app.get('/users', verifyAdminToken, async (req, res) => {
    const users = await Users.find()
        .sort({ createdAt: -1 })
    
    let userArray = [];
    
    for (let i = 0; i < users.length; i++){
        userArray.push({
            id: users[i]._id,
            username: users[i].username,
            email: users[i].email,
            createdAt: users[i].createdAt
        })
    }

    if (users) {
        res.status(200).json({
            success: true,
            data: userArray
        })
    }
})

app.get('/admin/profile', verifyAdminToken, (req, res) => {
    if (req.adminInfo) {
        res.json({
            success: true,
            adminInfo: req.adminInfo
        });
    }
})

app.post('/admin/logout', (req, res) => {
    res.cookie('token', '').json({
        success: false,
        message: 'ok'
    })
})

app.delete('/user/:id',  async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Users.findByIdAndDelete(id);``
        console.log(user)
        res.json({
            success: true,
            message: "User deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to delete user: ${error}`
        })
    }

})

app.get('/admin/blogs', verifyAdminToken, async (req, res) => {
    const blogs = await Blog.find()
        .sort({createdAt: -1})
        .populate('author', ["username"]);

    if (blogs) {
        res.status(200).json({
            success: true,
            data: blogs
        })
    }
})