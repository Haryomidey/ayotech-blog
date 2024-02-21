import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';
import logoutAdmin from '../../api/logoutAdmin';

import { RiMenu3Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

    const [showLogoutBox, setShowLogoutBox] = useState(false);
    const { adminInfo, setAdminInfo } = useContext(AdminContext);

    const { handleLogout } = logoutAdmin();

    useEffect(() => {
        const handleGetAdminProfile = async () => {
            const res = await fetch('http://localhost:5000/admin/profile', {
                credentials: 'include'
            });

            const data = await res.json();
            setAdminInfo(data.adminInfo);
        }
        handleGetAdminProfile();
    }, []);


    const admin_name = adminInfo && adminInfo?.admin_name;

    return (
        <header className='fixed w-full left-0 top-0 h-[80px] shadow-xl py-3 px-28 flex justify-between items-center bg-white'>
            <div className='select-none'>
                <Link to='/admin/blogs'>
                    <h1 className='text-2xl font-bold text-primary'>Ayotech Blog</h1>
                </Link>
                <p className='text-gray'>Admin panel</p>
            </div>

            {!admin_name ?
                <div className='flex gap-3'>
                    <Link to='/admin/login'>
                        <button className=' font-semibold'>Login</button>
                    </Link>
                    {/* <Link to='/admin/register'>
                        <button className=' font-semibold'>Register</button>
                    </Link> */}
                </div>
                :
                <div className='relative select-none hidden laptop:block'>
                    <div className='flex items-center gap-2 cursor-pointer text-primary' onClick={() => setShowLogoutBox(!showLogoutBox)}>
                        <div className='h-[40px] w-[40px] border-2 border-primary rounded-full grid place-items-center capitalize font-semibold text-2xl'>
                            {admin_name.slice(0, 1)}
                        </div>
                        <IoMdArrowDropdown />
                    </div>

                    {showLogoutBox && <div className='absolute min-w-[140px] py-3 px-2 shadow-2xl rounded-md bg-white right-0 top-12 font-semibold cursor-pointer flex items-center justify-center flex-col'>
                        <h2 className='text-primary capitalize text-xl'>{admin_name}</h2>
                        <p className='w-full py-1 mt-2 text-center rounded-lg hover:bg-primary hover:text-white transition-colors ease duration-500' onClick={handleLogout}>Logout</p>
                    </div>}
                </div>
            }
            <div className='text-xl text-primary font-bold laptop:hidden'>
                <RiMenu3Line />
            </div>
        </header>
    )
    }

export default Navbar
