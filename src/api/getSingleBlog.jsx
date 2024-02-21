import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const getSingleBlog = () => {

    const [blog, setBlog] = useState({});
    
    const { id } = useParams();

  const handleGetBlog = async () => {
    const res = await fetch('http://localhost:5000/blog/'+id, {
      method: "GET",
    });

    const data = await res.json();
    setBlog(data.data)
  }

  useEffect(() => {
    handleGetBlog();
  }, [id])

  return {blog}
}

export default getSingleBlog;
