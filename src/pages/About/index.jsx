import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './HeroSection'
import MainSection from './MainSection'

const About = () => {
    return (
        <main className='bg-bg-gray pt-[80px]'>
            <Navbar />
            <HeroSection />
            <MainSection />
            <Footer />
        </main>
    )
}

export default About
