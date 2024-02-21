import React from 'react'

const MapContainer = () => {
    return (
        <div className='w-full mt-20 h-[400px]'>
            <iframe className='w-full h-full border-0' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10277723.63436971!2d1.026703431111171!3d3.3199243167228816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1707937761052!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default MapContainer
