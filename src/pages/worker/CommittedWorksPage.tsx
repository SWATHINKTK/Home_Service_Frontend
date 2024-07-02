import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { viewAcceptedWorkAPI } from '../../utils/api/workerAPI';
import { addBooking } from '../../reducers/worker/bookingSlice';
import WorksListing from '../../components/Worker/Booking/WorksListing';
import { Helmet } from 'react-helmet-async';
import Loader from '../../components/Common/Loader/Loader';

const CommittedWorksPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await viewAcceptedWorkAPI(1);
                dispatch(addBooking(response.data));
            } catch (error) {
                console.log(error)
            }
            finally{
                setIsLoading(false);
            }
        })()
    }, [dispatch]);
    console.log("main")
    return (
        <>
            <Helmet>
                <title>Committed Works</title>
            </Helmet>
            {isLoading ? <Loader/> :<WorksListing/>}
        </>
    )
}

export default CommittedWorksPage
