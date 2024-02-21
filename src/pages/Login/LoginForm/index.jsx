import { Link } from 'react-router-dom';
import loginUser from '../../../api/loginUser';

const LoginForm = () => {

    const { user, handleChange, handleLogin, loading } = loginUser();


    return (
        <form onSubmit={handleLogin} className='flex flex-col gap-5 items-center justify-center px-5 tablet:px-10 laptop:px-20 mt-16'>
            <h2 className='text-3xl font-semibold'>Login Page</h2>
            <div className='w-full max-w-[450px] flex flex-col gap-4'>
                <input
                    type="email"
                    className='w-full border border-primary p-2'
                    placeholder='Email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className='w-full border border-primary p-2'
                    placeholder='Password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
                <button className='rounded-none py-3'>
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
