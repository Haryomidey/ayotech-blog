import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EditBlogForm from './EditBlogForm';

const EditBlog = () => {
    return (
        <main className='bg-bg-gray pt-20'>
            <Navbar />
            <EditBlogForm />
            <Footer />
        </main>
    )
}

export default EditBlog