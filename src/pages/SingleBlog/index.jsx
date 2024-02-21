import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './HeroSection'

const SingleBlog = () => {
    return (
        <main className='bg-bg-gray pt-20'>
            <Navbar />
            <HeroSection />
            <Footer />
        </main>
    )
}

export default SingleBlog
