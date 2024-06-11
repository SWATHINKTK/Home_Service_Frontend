import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';

import Navbar from '../../components/Common/Navbar/Navbar';
import WorksListing from '../../components/Worker/Booking/WorksListing';
import { allBookingViewOnWorkerAPI } from '../../utils/api/workerAPI';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { addBooking } from '../../reducers/worker/bookingSlice';

const WorkListPage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const response = await allBookingViewOnWorkerAPI();
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);

    return (
        <>
            <Helmet>
        <title>Bookings</title>
      </Helmet>
            <Navbar user={false} special={false} />
            <WorksListing />
        </>
    )
}

export default WorkListPage
