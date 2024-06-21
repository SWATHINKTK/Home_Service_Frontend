import React from 'react'
import { Helmet } from 'react-helmet-async'
import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import BookingHistory from '../../components/Admin/Bookings/BookingHistory'


const BookingHistoryPage:React.FC = () => {
    
  return (
    <>
      <Helmet>
        <title>Sales Report</title>
      </Helmet>
      <AdminMainComponent content={ <BookingHistory/>} />
    </>
  )
}

export default BookingHistoryPage
