import React from 'react'

const ContactForm = () => {
    return (
        <form className='mt-10 tablet:mt-[-100px] w-full max-w-[500px] mx-auto relative z-40 min-h-[300px] bg-white shadow-lg rounded-xl py-10 px-5 grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
                <label className='font-semibold text-gray'>Name</label>
                <input type="text" className='border border-[#d9d9d9] p-2 rounded-md' />
            </div>
            <div className='flex flex-col'>
                <label className='font-semibold text-gray'>Email</label>
                <input type="email" className='border border-[#d9d9d9] p-2 rounded-md' />
            </div>
            <div className='flex flex-col'>
                <label className='font-semibold text-gray'>Phone</label>
                <input type="tel" className='border border-[#d9d9d9] p-2 rounded-md' />
            </div>
            <div className='flex flex-col'>
                <label className='font-semibold text-gray'>Subject</label>
                <input type="text" className='border border-[#d9d9d9] p-2 rounded-md' />
            </div>
            <div className='col-span-2'>
                <div className='w-full grid'>
                    <label className='font-semibold text-gray'>Subject</label>
                    <textarea className='border border-[#d9d9d9] p-2 rounded-md outline-none min-h-[100px]'></textarea>
                </div>
            </div>

            <div className='col-span-2 mt-5 flex justify-center'>
                <button className='rounded-md'>Send Message</button>
            </div>
        </form>
    )
}

export default ContactForm
