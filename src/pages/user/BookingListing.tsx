import React, { useEffect } from 'react'
import BookedServices from '../../components/User/BookingDetails/ListBookings'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { bookedDataRetrieveAPI } from '../../utils/api/userAPI'
import { updateBookingData } from '../../reducers/worker/bookingSlice'
import { Helmet } from 'react-helmet-async'

const BookingListing: React.FC = () => {
    const { currentPage } = useAppSelector((state) => state.booking);
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await bookedDataRetrieveAPI(currentPage, false);
            console.log(response)
            dispatch(updateBookingData(response.data));
        })()
    },[currentPage, dispatch]);
    return (
        <>
            <Helmet>
                <title>Bookings</title>
            </Helmet>
            <BookedServices heading='Bookings'/>
        </>
    )
}

export default BookingListing
