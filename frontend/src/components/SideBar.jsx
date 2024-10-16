import React from 'react'

const SideBar = () => {
    return (
        <div className='w-3/12 h-full p-4 mt-4 flex flex-col gap-2 items-center'>
            <img src="default.jpg" alt="student profile image" className='w-11/12 rounded-full border-2' />
            <h1 className='text-2xl '>Name</h1>
            <p>USN</p>
        </div>
    )
}

export default SideBar
