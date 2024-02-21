import React from 'react'
import { FaBlog, FaShieldAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav className='w-[20%] h-full shadow-2xl bg-white'>
            <ul className='w-full flex flex-col items-center gap-2 pt-10'>
                <li>
                    <NavLink to='/admin/blogs' className='flex items-center gap-2'>
                        <FaBlog />
                        Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/users' className='flex items-center gap-2'>
                        <FaShieldAlt />
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
