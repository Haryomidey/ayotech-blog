import React from 'react'
import Footer from '../../components/Footer'
import RegisterForm from './RegisterForm'
import Navbar from '../../components/Navbar'

const Register = () => {
    return (
        <div className='mt-36 tablet:mt-24'>
            <Navbar />
            <RegisterForm />
            <Footer />
        </div>
    )
}

export default Register
