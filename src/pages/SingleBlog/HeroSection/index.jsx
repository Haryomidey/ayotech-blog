import { useContext, useEffect, useState } from 'react';
import getSingleBlog from '../../../api/getSingleBlog';
import deleteBlog from '../../../api/deleteBlog';
import PopularBlog from '../../../components/PopularBlog';
import timeConverter from '../../../utils/timeConverter';
import { UserContext } from '../../../contexts/UserContext';
import { Link } from 'react-router-dom';

// Icons
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const HeroSection = () => {
    const { userInfo } = useContext(UserContext);
    const { blog: initialBlog, loading, error } = getSingleBlog();
    const { handleDeleteBlog } = deleteBlog();
    const { formatDate } = timeConverter();
    const [blog, setBlog] = useState(initialBlog);

    useEffect(() => {
        setBlog(initialBlog);
    }, [initialBlog]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const editTable = userInfo && blog && blog.author && userInfo.id === blog.author._id;

    return (
        <div className='w-full pt-10 tablet:pt-20'>
            {blog && (
                <div className='w-full px-5 tablet:px-10 laptop:px-20'>
                    <p className='text-gray text-center text-sm'>{formatDate(blog.createdAt)}</p>
                    <h2 className='mt-3 font-bold text-xl text-center'>{blog.title}</h2>
                    <h2 className='capitalize font-bold text-sm text-center my-2'>By: {blog.author && blog.author.username}</h2>
                    {editTable && (
                        <div className='w-full flex items-center justify-center gap-3'>
                            
                            <Link to={`/edit/${blog._id}`}>
                                <div className='px-6 h-[50px] text-xl bg-black text-white flex items-center gap-2 rounded-md cursor-pointer'>
                                    <FaEdit />
                                    <p>Edit Post</p>
                                </div>
                            </Link>
                            
                            <div className='text-2xl bg-black text-white h-[50px] px-3 rounded-md cursor-pointer flex items-center' onClick={() => handleDeleteBlog(blog._id)}>
                                <MdDelete />
                            </div>
                        </div>
                    )}

                    {blog.category && <p className='mt-3 text-white bg-black px-3 py-2 w-[fit-content] rounded-md mb-2'>{blog.category}</p>}
                    <div className={`w-full h-[400px] overflow-hidden rounded-xl ${!blog.category ? 'mt-4' : 'mt-1'}`}>
                        <img src={`http://localhost:5000/${blog.cover}`} className='w-full h-full object-cover' alt='' />
                    </div>

                    <div className='mt-3 single-blog' dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            )}
            <PopularBlog />
        </div>
    );
};

export default HeroSection;
