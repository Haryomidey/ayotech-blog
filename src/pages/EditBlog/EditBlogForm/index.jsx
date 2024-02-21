import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}


const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const EditBlogForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        snippet: "",
        category: "General",
        file: "",
        content: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [previewImage, setPreviewImage] = useState({
        file: null,
        imagePreviewUrl: ''
    });

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files })
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setPreviewImage({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    }
    useEffect(() => {
        const data = new FormData();
        data.set('title', formData.title);
        data.set('snippet', formData.snippet);
        data.set('category', formData.category);
        data.set('content', formData.content);
        data.set('avatar', formData.file[0]);

        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/edit/' + id);

            const dataF = await res.json();
            setFormData(prevState => ({
                ...prevState,
                title: dataF.message.title,
                snippet: dataF.message.snippet,
                category: dataF.message.category || "General",
                content: dataF.message.content
            }));
        }
        fetchData()
    }, []);

    const handleEditPost = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = new FormData();
            data.set('title', formData.title);
            data.set('snippet', formData.snippet);
            data.set('category', formData.category);
            data.set('content', formData.content);
            if (formData.file?.[0]) {
                data.set('avatar', formData.file[0]);
            }

            const res = await fetch('http://localhost:5000/edit/' + id, {
                method: "PUT",
                credentials: 'include',
                body: data
            })
            const dataF = await res.json();
            toast.error(dataF.message);    

            if (dataF.success) {
                navigate(`/blog/${id}`);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }

    }
    const handleCloseMessage = () => {
        setError('')
    }
    return (
        <form onSubmit={handleEditPost} className='flex flex-col gap-5 items-center justify-center px-5 tablet:px-10 laptop:px-20 mt-16'>
            <h2 className='text-xl font-semibold'>Create A New Blog</h2>
            {error &&<div className='w-full max-w-[450px] bg-[#ad7564] min-h-[50px] grid place-items-center text-center text-white relative p-5'>
                <p>{error}</p>
                <i className="fa-solid fa-xmark  absolute right-2 top-2 cursor-pointer" onClick={handleCloseMessage}></i>
            </div>}
            <div className='w-full max-w-[600px] flex flex-col gap-4'>
                <input
                    type="text"
                    className='w-full border border-primary p-2'
                    placeholder='Blog Title'
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                <input
                    type="text"
                    className='w-full border border-primary p-2'
                    placeholder='Blog Snippet'
                    value={formData.snippet}
                    onChange={(e) => setFormData({ ...formData, snippet: e.target.value })}
                />
                <div>
                    <select
                        className='w-full outline-none border border-primary py-3 px-2'
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                        <option disabled>Category</option>
                        <option value='Celebrities'>Celebrities</option>
                        <option value='Education'>Education</option>
                        <option value='Entertainment'>Entertainment</option>
                        <option value='Fashion'>Fashion</option>
                        <option value='General'>General</option>
                        <option value='News'>News</option>
                        <option value='Nigeria News'>Nigeria News</option>
                        <option value='Sports'>Sports</option>
                        <option value='Tech'>Tech</option>
                    </select>
                </div>
                <input
                    type="file"
                    accept='image/*'
                    encType="multipart/form-data"
                    name='file'
                    value={formData.cover}
                    onChange={handleFileChange}
                    className='w-full border border-primary p-2'
                />
                {previewImage.imagePreviewUrl &&  <div className='w-full h-[100px] '>
                    <img src={previewImage.imagePreviewUrl} className='w-full h-full object-cover' alt=""/>
                </div>}
                <ReactQuill
                    value={formData.content}
                    onChange={(newValue) => setFormData({...formData, content: newValue})}
                    modules={modules}
                    formats={formats}
                />
                <button className='rounded-none py-3'>
                    {
                        loading ?
                            'Updating Blog...'
                            :
                            'Update Blog'
                    }
                </button>
            </div>
        </form>
    )
}

export default EditBlogForm
