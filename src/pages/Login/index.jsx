import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <main className='mt-36 tablet:mt-24'>
            <Navbar />
            <LoginForm />
            <Footer />
        </main>
    )
}

export default Login
