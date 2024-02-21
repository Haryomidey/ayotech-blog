import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from './HeroSection'
import PopularBlog from '../../components/PopularBlog'
import RecentBlog from '../../components/RecentBlog'
import SecondSection from './SecondSection'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <main className='bg-bg-gray pt-[80px]'>
            <Navbar />
            <HeroSection />
            <SecondSection />
            <RecentBlog />
            <PopularBlog />
            <Footer />
        </main>
    )
}

export default Home
