import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Login from '../auth/login/Login'
import Otp_Verify from '../auth/otp_verify/Otp_Verify'
import Rooms from '../components/pages/rooms/Rooms'
import RoomDetails from '../components/pages/rooms/RoomDetails'
import Related_Rooms from '../components/pages/rooms/Related_Rooms'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/otp-send' element={<Login/>}/>
        <Route path='/otp-verify' element={<Otp_Verify/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/room-details/:_id' element={<RoomDetails/>}/>
        <Route path='/related-rooms/:_id' element={<Related_Rooms/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
