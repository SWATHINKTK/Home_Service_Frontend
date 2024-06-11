import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import BookingLastProcedure from '../../components/User/Bookings/BookingLastProcedure'
import Footer from '../../components/User/Footer/Footer'
import { Helmet } from 'react-helmet-async'

const BookingPage: React.FC = () => {
  return (
    <>
        <Helmet>
        <title>Booking</title>
        </Helmet>
        <Navbar user={true} special={false}/>
        <BookingLastProcedure/>
        <Footer />
    </>
  )
}

export default BookingPage
