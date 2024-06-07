import React, { useEffect } from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import BookedServices from '../../components/User/BookingDetails/ListBookings'
import ProfileLayout from '../../components/User/ProfileLayout/ProfileLayout'
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { bookedDataRetrieveAPI } from '../../utils/api/userAPI'
import { addBooking } from '../../reducers/worker/bookingSlice'

const BookingListing: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await bookedDataRetrieveAPI();
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);
    return (
        <>
            <Navbar user={true} special={false} />
            <ProfileLayout component={<BookedServices />}  head={'Booked Services'}/>
        </>
    )
}

export default BookingListing
