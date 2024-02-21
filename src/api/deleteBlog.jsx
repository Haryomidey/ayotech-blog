import { useNavigate } from 'react-router-dom';

const deleteBlog = () => {

    const navigate = useNavigate();

    const handleDeleteBlog = async (id) => {
        const res = await fetch('http://localhost:5000/blog/'+id, {
            method: "DELETE",
            credentials: "include"
        });

        console.log(res);

        const data = await res.json();

        console.log(data)

        if (res.ok) {
            navigate('/blogs');
        }
    }

    return {handleDeleteBlog}
}

export default deleteBlog;
