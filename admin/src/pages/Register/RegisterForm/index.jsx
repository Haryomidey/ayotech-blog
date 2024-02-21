import React from 'react';
import { Link } from 'react-router-dom';
import registerAdmin from '../../../api/registerAdmin';

const RegisterForm = () => {

    const { admin, handleChange, handleRegister, errors, setErrors, loading } = registerAdmin();

    const handleCloseMessage = () => {
        setErrors('')
    }

    return (
        <form onSubmit={handleRegister} className='flex flex-col gap-5 items-center justify-center px-20 mt-16'>
            <h2 className='text-3xl font-semibold'>Register Page</h2>
            {errors && <div className='w-full max-w-[450px] bg-[#ad7564] h-[50px] grid place-items-center text-white relative'>
                <p>{errors}</p>
                <i className="fa-solid fa-xmark  absolute right-2 top-2 cursor-pointer" onClick={handleCloseMessage}></i>
            </div>}
            <div className='w-full max-w-[450px] flex flex-col gap-4'>
                <input
                    type="text"
                    className='w-full border border-primary p-2'
                    placeholder='Admin name'
                    name='admin_name'
                    value={admin.admin_name}
                    onChange={handleChange}
                />
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
                            'Registering...'
                            :
                            'Register'
                    }
                </button>
            </div>
            <div className='w-full max-w-[450px]'>
                <p>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
            </div>
        </form>
    )
}

export default RegisterForm
