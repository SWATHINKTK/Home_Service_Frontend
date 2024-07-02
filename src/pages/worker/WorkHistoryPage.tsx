import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';

import WorksListing from '../../components/Worker/Booking/WorksListing';
import { workHistoryAPI } from '../../utils/api/workerAPI';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { addBooking } from '../../reducers/worker/bookingSlice';
import Loader from '../../components/Common/Loader/Loader';

const WorkHistoryPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await workHistoryAPI(1);
                dispatch(addBooking(response.data));
            } catch (error) {
                console.log(error)
            }
            finally{
                setIsLoading(false)
            }
        })()
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>History</title>
            </Helmet>
           {isLoading ? <Loader/> :<WorksListing />}
        </>
    )
}

export default WorkHistoryPage
