import React from 'react'
import Cards from './Cards';

const Events = () => {
    

    return (
        <div className='m-3 p-5'>
            <h1 className='text-3xl mb-5'>Upcoming Events</h1>
            <div className="p-3 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 w-full">
                {Array(10).fill().map((_, index) => (
                    <Cards key={index} />
                ))}
            </div>
            
        </div>
    )
}

export default Events
