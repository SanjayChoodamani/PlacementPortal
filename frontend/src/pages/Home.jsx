import { React, useState } from 'react';
import MainFooter from '../components/MainFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [usn, setUsn] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(usn, password);
            // Send login request to the backend
            const res = await axios.post('http://localhost:3000/auth/login', { usn, password }, {
                withCredentials: true // Important to send the cookies back to the backend
            });
            
            // If login is successful, navigate to dashboard
            navigate('/dashboard', { replace: true });
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Empowering Students for a Successful Career: The Placement Platform.</h1>
                        <p className="leading-relaxed mt-4">Where Knowledge Meets Industry, and Dreams Meet Reality.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">USN</label>
                                <input 
                                    type="text" 
                                    id="usn" 
                                    name="usn" 
                                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                    value={usn} 
                                    onChange={(e) => setUsn(e.target.value)} 
                                />
                            </div>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <button className="text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <MainFooter />
        </div>
    );
};

export default Home;
