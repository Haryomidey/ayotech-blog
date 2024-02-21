import { Link } from 'react-router-dom';
import registerUser from '../../../api/registerUser';

const RegisterForm = () => {

    const { user, handleChange, handleRegister, loading } = registerUser();

    return (
        <form onSubmit={handleRegister} className='flex flex-col gap-5 items-center justify-center px-5 tablet:px-10 laptop:px-20 mt-16'>
            <h2 className='text-3xl font-semibold'>Register Page</h2>
            <div className='w-full max-w-[450px] flex flex-col gap-4'>
                <input
                    type="text"
                    className='w-full border border-primary p-2'
                    placeholder='Username'
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                />
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

export default RegisterForm;
