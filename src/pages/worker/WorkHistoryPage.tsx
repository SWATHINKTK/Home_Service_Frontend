import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';

import WorksListing from '../../components/Worker/Booking/WorksListing';
import { workHistoryAPI } from '../../utils/api/workerAPI';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { addBooking } from '../../reducers/worker/bookingSlice';

const WorkHistoryPage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const response = await workHistoryAPI();
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>History</title>
            </Helmet>
            <WorksListing />
        </>
    )
}

export default WorkHistoryPage
