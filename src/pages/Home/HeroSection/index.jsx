import React from 'react';
import HeroImage from '../../../assets/images/ai.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='bg-primary w-full hero-height flex items-center justify-between px-5 tablet:px-10 laptop:px-20 text-white pb-4'>
            <div className='w-full tablet:w-[50%]'>
                <h2>Featured Post</h2>
                <h1 className='text-2xl laptop:text:3xl desktop:text-5xl leading-[4rem] font-bold w-full tablet:w-[75%]'>How AI will Change the Future</h1>
                <p className='mt-4 w-[80%]'>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
                <Link to='/blogs'>
                    <button className='bg-white text-primary mt-10 font-semibold'>Read More</button>
                </Link>
            </div>
            <div className='w-[50%] hidden tablet:flex justify-end'>
                <div className='w-[85%] h-[450px] overflow-hidden rounded-xl'>
                    <img src={HeroImage} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
