import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleBlog from '../pages/SingleBlog'
import Blogs from '../pages/Blogs'
import About from '../pages/About'
import Contact from '../pages/Contact'
import CreateBlog from '../pages/CreateBlog'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ScrollToTop from '../utils/ScrollToTop'
import EditBlog from '../pages/EditBlog'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create' element={<CreateBlog />} />
                <Route path='/blog/:id' element={<SingleBlog />} />
                <Route path='/edit/:id' element={<EditBlog />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default Router
