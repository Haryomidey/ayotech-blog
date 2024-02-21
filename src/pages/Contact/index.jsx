import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InfoContainer from './InfoContainer';
import MapContainer from './MapContainer';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <main className='mt-32'>
            <Navbar />
            <div className='px-5 tablet:px-10 laptop:px-20'>
                <h1 className='text-center font-bold text-3xl'>Get in Touch</h1>
                <p className='text-center text-gray mt-3'>Contact us to publish your content and show ads to our website and get a good reach.</p>

                <InfoContainer />
                <MapContainer />
                <ContactForm />
            </div>
            <Footer />
        </main>
    )
}

export default Contact
