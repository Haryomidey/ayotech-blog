import React from 'react';
import { Link } from 'react-router-dom';
import loginAdmin from '../../../api/loginAdmin';

const LoginForm = () => {

    const { admin, handleChange, handleLogin, errors, setErrors, loading } = loginAdmin();

    const handleCloseMessage = () => {
        setErrors('')
    }


    return (
        <form onSubmit={handleLogin} className='flex flex-col gap-5 items-center justify-center px-20 mt-16'>
            <h2 className='text-3xl font-semibold'>Login Page</h2>
            {errors && <div className='w-full max-w-[450px] bg-[#ad7564] h-[50px] grid place-items-center text-white relative'>
                <p>{errors}</p>
                <i className="fa-solid fa-xmark  absolute right-2 top-2 cursor-pointer" onClick={handleCloseMessage}></i>
            </div>}
            <div className='w-full max-w-[450px] flex flex-col gap-4'>
                <input
                    type="email"
                    className='w-full border border-primary p-2'
                    placeholder='Email'
                    name='email'
                    value={admin.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className='w-full border border-primary p-2'
                    placeholder='Password'
                    name='password'
                    value={admin.password}
                    onChange={handleChange}
                />
                <button className='rounded-none'>
                    {
                        loading ? 
                            'Logging in...'
                            :
                            'Login'
                    }
                </button>
            </div>
            <div className='w-full max-w-[450px]'>
                <p>Don't have an account? <Link to='/register' className='text-primary'>Register</Link></p>
            </div>
        </form>
    )
}

export default LoginForm
