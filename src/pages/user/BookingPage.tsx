import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import BookingLastProcedure from '../../components/User/Bookings/BookingLastProcedure'
import Footer from '../../components/User/Footer/Footer'

const BookingPage: React.FC = () => {
  return (
    <>
        <Navbar user={true} special={false}/>
        <BookingLastProcedure/>
        <Footer />
    </>
  )
}

export default BookingPage
