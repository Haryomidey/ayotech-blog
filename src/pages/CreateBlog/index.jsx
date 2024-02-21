import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogForm from './BlogForm'

const CreateBlog = () => {
    return (
        <main className='bg-bg-gray pt-20'>
            <Navbar />
            <BlogForm />
            <Footer />
        </main>
    )
}

export default CreateBlog
