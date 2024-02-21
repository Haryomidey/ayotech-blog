import { Link } from 'react-router-dom';
import getBlogs from '../../api/getBlogs';
import BlogCard from '../BlogCard';
import { useEffect, useState } from 'react';


const RecentBlog = () => {

    const { blogs } = getBlogs();

    
    const [firstRecentBlog, setFirstRecentBlog] = useState([]);

    useEffect(() => {
        if (blogs.length >= 0) {
            setFirstRecentBlog(blogs.slice(0, 1))
        };
    }, [blogs])

    return (
        <section className='w-full px-5 tablet:px-10 laptop:px-20 pb-4 mt-10 tablet:mt-5'>
            <div className='mb-4 tablet:mb-10 flex justify-between items-center'>
                <h2 className='tablet:text-3xl font-bold'>Our recent post</h2>
                <button className=''>View All</button>
            </div>

            {firstRecentBlog.length > 0 && <div className='w-full tablet:flex justify-between'>
                    <Link to={`/blog/${firstRecentBlog[0]._id}`} className='w-full tablet:w-[48%] overflow-hidden rounded-xl'>
                        <div className='w-full h-full'>
                            <img src={`http://localhost:5000/${firstRecentBlog[0].cover}`} className='w-full h-full' alt="" />
                        </div>
                    </Link>
                    <div className='w-full tablet:w-[48%] tablet:px-4 pt-4 tablet:pt-14'>
                        <div className='flex items-center gap-4'>
                            <h2 className='capitalize font-semibold text-sm'>{firstRecentBlog[0].author && firstRecentBlog[0].author.username}</h2>
                            <p className='text-gray text-xs'>16 March 2023</p>
                        </div>
                        <Link to={`/blog/${firstRecentBlog[0]._id}`}>
                            <h2 className='mt-3 font-bold text-xl'>
                                {firstRecentBlog[0].title}
                            </h2>
                        </Link>
                        <Link to={`/blog/${firstRecentBlog[0]._id}`}>
                            <div className='text-gray text-sm mt-2 tablet:mt-5'>
                                <div>{firstRecentBlog[0].snippet.slice(0, 500)}</div>
                            </div>
                        </Link>
                        <Link to={`/blog/${firstRecentBlog[0]._id}`}>
                            <button className='mt-3 tablet:mt-10 bg-transparent border border-primary text-primary font-bold'>Read More</button>
                        </Link>
                    </div>
                </div>
            }
            {!firstRecentBlog && <div className='w-full text-2xl font-semibold text-center'>
                    <p>No Recent post yet!!!</p>
                </div>    
            }



            {/* ======================== More recent blogs ======================= */}
            {/* ======================== More recent blogs ======================= */}
            {/* ======================== More recent blogs ======================= */}

            <ul className='mt-20 grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 w-full'>
                {blogs.length >= 1 && blogs.slice(0, 3).map((blog) => (
                    <BlogCard {...blog} key={blog._id} />
                ))}
            </ul>
        </section>
    )
}

export default RecentBlog
