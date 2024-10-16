import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/EditProfile';
import PasswordReset from './pages/PasswordReset';
import AdminPanel from './pages/AdminPanel';
import CreateEvent from './pages/CreateEvent';
import StudentDetails from './pages/StudentDetails';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/profile' element={<EditProfile/>}/>
      <Route path='/reset' element={<PasswordReset/>}/>
      <Route path='/admin/panel' element={<AdminPanel/>}/>
      <Route path='/admin/event' element={<CreateEvent/>}/>
      <Route path='/admin/details' element={<StudentDetails/>}/>
    </Routes>
  )
}

export default App
