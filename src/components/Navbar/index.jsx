import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logoutUser from '../../api/logoutUser';

import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import SearchIcon from '../../assets/icons/search.svg';

import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);

    const [showLogoutBox, setShowLogoutBox] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const navbarRef = useRef();

    const { handleLogout } = logoutUser();

    useEffect(() => {
        const handleGetUserProfile = async () => {
            const res = await fetch('http://localhost:5000/profile', {
                credentials: 'include'
            });

            const data = await res.json();
            setUserInfo(data.userInfo);
        }
        handleGetUserProfile();
    }, []);

    const username = userInfo && userInfo?.username;

    useEffect(() => {
    const navbarOutsideClick = (e) => {
        if (!navbarRef.current.contains(e.target)) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }

    document.addEventListener('mousedown', navbarOutsideClick);

    return () => {
        document.removeEventListener('mousedown', navbarOutsideClick);
    }
    
}, []);

    return (
        <header className='bg-white w-full h-[80px] flex items-center justify-between px-5 tablet:px-10 laptop:px-20 shadow-lg fixed top-0 z-50'>
            <h1 className='text-primary text-xl laptop:text-4xl font-bold'><Link to='/'>Ayotech Blog</Link></h1>
            <ul className='hidden laptop:flex items-center gap-10'>
                <li>
                    <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                {username && <li>
                    <NavLink to='/create'>Create Blog</NavLink>
                </li>}
                <li>
                    <div className='w-[30px] cursor-pointer' onClick={() => setShowSearch(true)}>
                        <img src={SearchIcon} className='w-full' alt="" />
                    </div>
                </li>
                <li>
                    <Link to='/contact' className='w-full'>
                        <button>Contact Us</button>
                    </Link>
                </li>
            </ul>

            {!username ?
                <div className='hidden gap-3 laptop:flex'>
                    <Link to='/login'>
                        <button className='bg-transparent text-primary font-semibold'>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className=' font-semibold'>Register</button>
                    </Link>
                </div>
                :
                <div className='relative select-none hidden laptop:block'>
                    <div className='flex items-center gap-2 cursor-pointer text-primary' onClick={() => setShowLogoutBox(!showLogoutBox)}>
                        <div className='h-[40px] w-[40px] border-2 border-primary rounded-full grid place-items-center capitalize font-semibold text-2xl'>
                            {username.slice(0, 1)}
                        </div>
                        <IoMdArrowDropdown />
                    </div>

                    {showLogoutBox && <div className='absolute min-w-[140px] py-3 px-2 shadow-2xl rounded-md bg-white right-0 top-12 font-semibold cursor-pointer flex items-center justify-center flex-col'>
                        <h2 className='text-primary capitalize text-xl'>{username}</h2>
                        <p className='w-full py-1 mt-2 text-center rounded-lg hover:bg-primary hover:text-white transition-colors ease duration-500' onClick={handleLogout}>Logout</p>
                    </div>}
                </div>
            }
            <div className='text-xl text-primary font-bold flex items-center gap-4 laptop:hidden'>
                <div className='w-[20px] cursor-pointer' onClick={() => setShowSearch(true)}>
                    <img src={SearchIcon} className='w-full' alt="" />
                </div>
                {!showNavbar && <div onClick={() => setShowNavbar(true)}>
                    <RiMenu3Line />
                </div>}
                {showNavbar && <div className='text-3xl' onClick={() => setShowNavbar(false)}>
                     <MdClose />
                </div>}
            </div>

            {/* Search Section */}

            <div className={`${!showSearch ? 'scale-[0]' : 'scale-[1]'} z-[9999] transition-transform ease duration-500 w-full fixed top-0 left-0 bg-[white] h-screen flex flex-col items-center justify-center`}>
                <div className='absolute right-4 top-4 text-2xl tablet:text-3xl cursor-pointer' onClick={() => setShowSearch(false)}>
                    <MdClose />
                </div>

                <div className='w-full px-5 flex justify-center'>
                    <input type="text" className='w-full max-w-[500px] text-black text-xl tablet:text-3xl p-3 border-b-2' placeholder='Search For Blogs...' />
                </div>
            </div>


            {/* Mobile Screen */}

            <div className={`absolute top-[80px] left-0 w-full h-screen duration-500 ease bg-[#00000086] ${!showNavbar ? 'invisible' : 'bg-[#000000a7] visible'}`}>
                <ul className={`flex flex-col gap-3 bg-white w-full max-w-[300px] h-full transition-[margin-left] duration-500 ease px-8 py-10 ${!showNavbar ? 'ml-[-100%]' : 'ml-[0]'}`} ref={navbarRef}>
                    <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    {username && <li>
                        <NavLink to='/create'>Create Blog</NavLink>
                    </li>}
                    <li>
                        <NavLink to='/contact' className='w-full'>
                            Contact Us
                        </NavLink>
                    </li>
                    {!username ?
                        <li className='flex flex-col gap-3'>
                            <NavLink to='/login'>
                                Login
                            </NavLink>
                            <NavLink to='/register'>
                                Register
                            </NavLink>
                        </li>
                        :
                        <li className='relative select-none'>
                            <div className='flex items-center gap-2 cursor-pointer text-primary' onClick={() => setShowLogoutBox(!showLogoutBox)}>
                                <div className=' grid place-items-center capitalize font-semibold text-2xl'>
                                    {username}
                                </div>
                                <IoMdArrowDropdown />
                            </div>

                            {showLogoutBox && <div className='min-w-[140px] py-3 px-2 shadow-2xl rounded-md bg-white font-semibold cursor-pointer flex items-center justify-center flex-col'>
                                <p className='w-full py-1 mt-2 text-center rounded-lg hover:bg-primary hover:text-white transition-colors ease duration-500' onClick={handleLogout}>Logout</p>
                            </div>}
                        </li>
                    }
                </ul>
            </div>

        </header>
    )
}

export default Navbar
