import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layouts = () => {
    return (
        <main className='w-full bg-bg-gray'>
            <Navbar />
            <div className='w-full mt-[80px] sidebar-height flex'>
                <Sidebar />
                <div className='max-w-[80%] overflow-hidden h-full px-10 py-6'>
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default Layouts
