import React from 'react'
import { Link } from 'react-router-dom';

const MainFooter = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
                    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" to='/admin'>
                        <span className="ml-3 text-xl">Admin Login</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">2024 © Malnad College of Engineering. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default MainFooter
