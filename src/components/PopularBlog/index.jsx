import React from 'react';
import BlogCard from '../BlogCard';
import getBlogs from '../../api/getBlogs';
import { Link } from 'react-router-dom';

const PopularBlog = () => {

    const { blogs } = getBlogs();

    return (
        <div className='mt-10 tablet:mt-20 px-5 tablet:px-10 laptop:px-20 w-full'>
            <div className='mb-4 tablet:mb-10 flex justify-between items-center'>
                <h2 className='tablet:text-3xl font-bold'>Popular post</h2>
                <Link to='/blogs'>
                    <button>View All</button>
                </Link>
            </div>
            <ul className='w-full max-w-full tablet:mt-10 grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6'>
                {blogs.length >= 1 && blogs.slice(-3).map((blog) => (
                    <BlogCard {...blog} key={blog._id} />
                ))}

                {blogs.length < 1 && <div className='w-full text-center text-2xl font-semibold'>
                    <p>No Popular post yet!!!</p>
                </div>}
            </ul>
        </div>
    )
}

export default PopularBlog
