import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Login from '../auth/login/Login'
import Otp_Verify from '../auth/otp_verify/Otp_Verify'
import Rooms from '../components/pages/rooms/Rooms'
import RoomDetails from '../components/pages/rooms/RoomDetails'
import Related_Rooms from '../components/pages/rooms/Related_Rooms'
import User_Profile from '../components/pages/user_profile/User_Profile'
import Booking_Success from '../components/pages/booking/booking_sucess/Booking_Sucess'
import My_Booking from '../components/pages/booking/my_booking/My_Booking'

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
        <Route path='/user-profile' element={<User_Profile/>}/>
        <Route path='/booking-success' element={<Booking_Success/>}/>
        <Route path='/my-bookings' element={<My_Booking/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
