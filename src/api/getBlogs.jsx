import { useEffect, useState } from 'react'

const getBlogs = () => {

  const [blogs, setBlogs] = useState({});

  const handleGetBlogs = async () => {
    const res = await fetch('http://localhost:5000/blogs', {
      method: "GET",
    });

    const data = await res.json();
    setBlogs(data.data)
  }

  useEffect(() => {
    handleGetBlogs();
  }, [blogs])

  return {blogs}
}

export default getBlogs;
