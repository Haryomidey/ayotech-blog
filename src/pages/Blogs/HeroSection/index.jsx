import React from 'react'
import BlogCard from '../../../components/BlogCard';
import getBlogs from '../../../api/getBlogs';

const HeroSection = () => {

  const { blogs } = getBlogs();
  return (
    <section className='w-full px-5 tablet:px-10 laptop:px-20'>
      <div className='flex flex-col items-center justify-center pt-20 text-center'>
        <p className='text-gray text-sm font-bold'>OUR BLOGS</p>
        <h2 className='font-bold text-2xl tablet:text-3xl tablet:w-[60%] mt-3'>
          Find our all blogs from here
        </h2>
        <p className='tablet:max-w-[60%] mt-5 text-sm tablet:text-md'>Our blogs are written from very research research and well known writers writers so that we can provide you the best blogs and articles articles for you to read them all along</p>
      </div>

      <ul className='mt-10 grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6'>
        {blogs.length >= 1 && blogs.map((blog) => (
          <BlogCard {...blog} key={blog._id} />  
        ))}

        {!blogs.length >= 1 && <div className='w-full text-center text-2xl font-semibold'>
          <p>No Blogs Yet!!!</p>
        </div>}

      </ul>
    </section>
  )
}

export default HeroSection
