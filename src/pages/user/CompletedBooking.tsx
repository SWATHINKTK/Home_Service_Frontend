import React, { useEffect } from 'react'
import BookedServices from '../../components/User/BookingDetails/ListBookings'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { bookedDataRetrieveAPI } from '../../utils/api/userAPI'
import { addBooking } from '../../reducers/worker/bookingSlice'
import { Helmet } from 'react-helmet-async'

const CompletedBooking: React.FC = () => {
    const { currentPage } = useAppSelector((state) => state.booking);
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await bookedDataRetrieveAPI(currentPage, true);
            dispatch(addBooking(response.data));
        })()
    }, [currentPage, dispatch]);
    return (
        <>
            <Helmet>
                <title>Booking History</title>
            </Helmet>
            <BookedServices heading='Booking History' />
        </>
    )
}

export default CompletedBooking
