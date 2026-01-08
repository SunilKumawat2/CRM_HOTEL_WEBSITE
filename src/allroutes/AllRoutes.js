import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Login from '../auth/login/Login'
import Otp_Verify from '../auth/otp_verify/Otp_Verify'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/otp-send' element={<Login/>}/>
        <Route path='/otp-verify' element={<Otp_Verify/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
