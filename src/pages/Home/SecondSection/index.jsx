import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';    

import getBlogs from '../../../api/getBlogs';
import timeConverter from '../../../utils/timeConverter';

const SecondSection = () => {

    const { blogs } = getBlogs();
    const [randomBlog, setRandomBlog] = useState(null);
    const [randomNum, setRandomNum] = useState(null);
    const [hasFetchedRandomBlog, setHasFetchedRandomBlog] = useState(false);


    const { formatDate } = timeConverter();


    useEffect(() => {
        if (blogs.length > 0 && !hasFetchedRandomBlog) {
            const randomIndex = Math.floor(Math.random() * blogs.length);
            if (!isNaN(randomIndex) && randomIndex !== undefined) {
                setRandomNum(randomIndex);
                setHasFetchedRandomBlog(true);
            }
        }
    }, [blogs, hasFetchedRandomBlog]);

    const handleD = () => {
        const randomBlog = blogs[randomNum];
        setRandomBlog(randomBlog);
    }

    useEffect(() => {
        if (randomNum !== undefined) {
            handleD();
        }
    }, [randomNum]);


    return (
        <>
            {randomBlog &&
                <div className='mt-20 px-5 tablet:px-10 laptop:px-20 w-full tablet:min-h-screen min-h-[50vh]'>
                    <div className='tablet:h-[450px] relative'>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <img src={`http://localhost:5000/${randomBlog.cover}`} className='w-full object-cover h-full' alt="" />
                        </div>
                        <div className='tablet:absolute bottom-[-30%] right-0 shadow-xl tablet:w-[60%] bg-white z-20 mt-4 pt-6 pb-10 px-5 rounded-lg'>
                            <div className='flex flex-wrap items-center gap-4'>
                                <h2 className='uppercase font-semibold text-sm'>{randomBlog.category}</h2>
                                <p className='text-gray text-xs'>{formatDate(randomBlog.createdAt)}</p>
                            </div>
                            <h2 className='mt-3 font-bold text-xl'>
                                {randomBlog.title}
                            </h2>
                            <p className='text-gray text-sm mt-3'>
                                {randomBlog.snippet ? `${randomBlog.snippet.slice(0, 280)}` : randomBlog.snippet}
                            </p>

                            <Link to={`/blog/${randomBlog._id}`}>
                                <button className='mt-6 bg-transparent border border-primary text-primary font-bold text-sm tablet:text-lg'>Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SecondSection
