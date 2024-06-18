import React, { useEffect } from 'react'
import BookedServices from '../../components/User/BookingDetails/ListBookings'
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { bookedDataRetrieveAPI } from '../../utils/api/userAPI'
import { addBooking } from '../../reducers/worker/bookingSlice'
import { Helmet } from 'react-helmet-async'

const BookingListing: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await bookedDataRetrieveAPI(false);
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);
    return (
        <>
            <Helmet>
                <title>Bookings</title>
            </Helmet>
            <BookedServices />
        </>
    )
}

export default BookingListing
