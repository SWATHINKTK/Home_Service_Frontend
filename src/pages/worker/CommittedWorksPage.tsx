import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { viewAcceptedWorkAPI } from '../../utils/api/workerAPI';
import { addBooking } from '../../reducers/worker/bookingSlice';
import WorksListing from '../../components/Worker/Booking/WorksListing';
import { Helmet } from 'react-helmet-async';

const CommittedWorksPage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const response = await viewAcceptedWorkAPI();
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);
    console.log("main")
    return (
        <>
            <Helmet>
                <title>Committed Works</title>
            </Helmet>
            <WorksListing/>
        </>
    )
}

export default CommittedWorksPage
