import React from 'react'
import Header from '../../common/header/Header'
import Hero_Section from '../../common/hero_section/Hero_Section'
import BookingBar from './BookingBar'
import AboutHotel from './AboutHotel'
import Home_Rooms from './Home_Rooms'
import Home_Services from './Home_Services'
import Home_SpecialOffers from './Home_SpecialOffers'
import Home_Gallery from './Home_Gallery'
import Home_Testimonials from './Home_Testimonials'
import Home_Location from './Home_Location'
import Home_Contact from './Home_Contact'
import Footer from '../../common/footer/Footer'

const Home = () => {
  return (
    <div>
      {/* <------- Header section ---------> */}
      <Header/>
      {/* <--------- Hero sections -----------> */}
      <Hero_Section/>
      {/* <------------ Booking Bar ---------> */}
      <BookingBar/>
      {/* <------- About Hostel ------------> */}
      <AboutHotel/>
      {/* <------- Home Rooms -------------> */}
      <Home_Rooms/>
      {/* <-------- Home Serives -----------> */}
      <Home_Services/>
      {/* <--------- Home Special Offer ---------> */}
      <Home_SpecialOffers/>
      {/* <------- Home gallery Sections ---------> */}
      <Home_Gallery/>
      {/* <-------- Home Testimonial -----------> */}
      <Home_Testimonials/>
      {/* <------- Home Location -----------> */}
      <Home_Location/>
      {/* <--------- home Contact -----------> */}
      <Home_Contact/>
      {/* <-------------Footer -----------> */}
      <Footer/>
    </div>
  )
}

export default Home
