import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='bg-white h-full p-10 rounded-xl shadow-xl flex flex-col items-center'>
            <h1 className='text-3xl font-semibold text-center text-gray'>OOPs, This page cannot be found</h1>
            <p className='mt-4 text-center w-[60%] mx-auto'>This page you are looking for cannot be found, click on the button below to be redirected to the home page</p>
            <Link to='/admin/users' className='mt-4'>
                <button className='px-4 py-2 bg-primary text-white font-semibold rounded-lg'>
                    Go Back Home
                </button>
            </Link>
        </div>
    )
}

export default ErrorPage
