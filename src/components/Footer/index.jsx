import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='mt-20'>
            <section className='px-5 tablet:px-10 laptop:px-20 bg-primary w-full min-h-[50vh] text-white flex flex-col gap-5 justify-center items-center py-10'>
                <h2 className='font-bold text-xl tablet:text-4xl w-full tablet:max-w-[60%] text-center'>Get our stories delivered From us to your inbox weekly.</h2>
                <div className='w-full flex flex-wrap items-center justify-center gap-4'>
                    <input type="text" className='bg-white text-black p-3 rounded-lg max-w-[300px] w-full' placeholder='Your Email' />
                    <button className='border w-full py-3 laptop:w-[fit-content] max-w-[300px]'>Get Started</button>
                </div>
                <p className='w-full tablet:max-w-[60%] text-center text-[#BBBBBB]'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
            </section>
            <div className='w-full px-5 tablet:px-10 laptop:px-20 pt-5 min-h-[50vh] text-black flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-primary text-xl tablet:text-4xl font-bold mt-10 tablet:mt-0'>Ayotech Blog</h1>
                <ul className='flex flex-wrap items-center justify-center gap-x-9 gap-y-3'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </li>
                </ul>
                <ul className='flex flex-wrap justify-center items-center gap-3'>
                    <li className='h-[40px] w-[40px] rounded-full bg-primary text-white hover:border hover:border-primary hover:bg-white hover:text-primary hover:scale-[1.1] transition-all ease duration-300'><Link to='' className='w-full h-full flex items-center justify-center  font-bold'><FaFacebookF /></Link></li>
                    <li className='h-[40px] w-[40px] rounded-full bg-primary text-white hover:border hover:border-primary hover:bg-white hover:text-primary hover:scale-[1.1] transition-all ease duration-300'><Link to='' className='w-full h-full flex items-center justify-center font-bold'><BsTwitterX /></Link></li>
                    <li className='h-[40px] w-[40px] rounded-full bg-primary text-white hover:border hover:border-primary hover:bg-white hover:text-primary hover:scale-[1.1] transition-all ease duration-300'><Link to='' className='w-full h-full flex items-center justify-center font-bold'><FaWhatsapp /></Link></li>
                    <li className='h-[40px] w-[40px] rounded-full bg-primary text-white hover:border hover:border-primary hover:bg-white hover:text-primary hover:scale-[1.1] transition-all ease duration-300'><Link to='' className='w-full h-full flex items-center justify-center font-bold '><FaLinkedinIn /></Link></li>
                </ul>
                <p className='my-5 tablet:my-10 border-[0.01rem] border-primary w-full'></p>
                <small className='text-center'>Copyright Ayotech © 2024. All Right Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
