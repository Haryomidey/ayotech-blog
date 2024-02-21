import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getBlogs = () => {

    const [blogs, setBlogs] = useState({});
    const navigate = useNavigate();

    const handleGetBlogs = async () => {
        const res = await fetch('http://localhost:5000/admin/blogs', {
            method: "GET",
            credentials: 'include'
        });

        const data = await res.json();
        if (data.message === 'Please login to perform this action') {
            navigate('/admin/login')
        }
        setBlogs(data.data);
    }

    useEffect(() => {
        handleGetBlogs();
    }, [blogs])

  return {blogs}
}

export default getBlogs;
