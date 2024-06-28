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
            const response = await allBookingViewOnWorkerAPI(1);
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Bookings</title>
            </Helmet>
            <Navbar worker={true} special={false} />
            <div className='pt-20'>
                <WorksListing />
            </div>
        </>
    )
}

export default WorkListPage
