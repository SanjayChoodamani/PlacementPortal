import React from 'react'
import MainFooter from '../components/MainFooter'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Admin Login</h1>
                <p className="leading-relaxed mt-4">Enter your credentials to login.</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                <div className="relative mb-4">
                    <label for="full-name" className="leading-7 text-sm text-gray-600">USN</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        <div data-v-d654fd91=""></div>
                </div>
                <button className="text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    <Link to='/admin/panel'>Login</Link>
                </button>
            </div>
        </div>
    </section>
    <MainFooter/>
</div>
  )
}

export default Admin
