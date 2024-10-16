import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Details from '../components/Details'


const EditProfile = () => {
    return (
        <div className='p-3'>
            <NavBar />
            <div className='flex'>
                <SideBar />
                <Details />
            </div>
        </div>
    )
}

export default EditProfile
