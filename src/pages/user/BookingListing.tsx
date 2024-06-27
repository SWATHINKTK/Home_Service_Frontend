import React, { useEffect } from 'react'
import BookedServices from '../../components/User/BookingDetails/ListBookings'
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { bookedDataRetrieveAPI } from '../../utils/api/userAPI'
import { addBooking } from '../../reducers/worker/bookingSlice'
import { Helmet } from 'react-helmet-async'

const BookingListing:React.FC = () => {
    // const { currentPage } = useAppSelector((state) => state.booking);
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            console.log(1)
            const response = await bookedDataRetrieveAPI(1, false);
            dispatch(addBooking(response.data));
        })()
    },[dispatch]);

    // useEffect(() => {
    //     (async () => {
    //         console.log(2)
    //         const response = await bookedDataRetrieveAPI(currentPage, false);
    //         dispatch(updateBookingData(response.data));
    //     })()
    // },[currentPage]);
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
