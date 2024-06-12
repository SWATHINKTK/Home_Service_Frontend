import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { addBooking } from '../../reducers/worker/bookingSlice'
import BookingHistory from '../../components/Admin/Bookings/BookingHistory'
import { bookingHistoryAPI } from '../../utils/api/adminAPI'

const BookingHistoryPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await bookingHistoryAPI();
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);
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
