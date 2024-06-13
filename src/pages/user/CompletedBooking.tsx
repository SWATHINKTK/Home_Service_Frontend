import React, { useEffect } from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import BookedServices from '../../components/User/BookingDetails/ListBookings'
import ProfileLayout from '../../components/User/ProfileLayout/ProfileLayout'
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { bookedDataRetrieveAPI } from '../../utils/api/userAPI'
import { addBooking } from '../../reducers/worker/bookingSlice'
import { Helmet } from 'react-helmet-async'

const CompletedBooking: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await bookedDataRetrieveAPI(true);
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);
    return (
        <>
            <Helmet>
                <title>History</title>
            </Helmet>
            <Navbar user={true} special={false} />
            <ProfileLayout component={<BookedServices />} />
        </>
    )
}

export default CompletedBooking