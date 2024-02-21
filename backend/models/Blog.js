const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const blogSchema = Schema(
    {
        title: String,
        snippet: String,
        content: String,
        category: String,
        cover: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    }, {

        timestamps: true
    }
)

const Blog = model('Blog', blogSchema);

module.exports = Blog;