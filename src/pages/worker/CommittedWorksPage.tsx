import React, { useEffect } from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { viewAcceptedWorkAPI } from '../../utils/api/workerAPI';
import { addBooking } from '../../reducers/worker/bookingSlice';
import ProfileLayout from '../../components/Worker/Profile/WorkerProfileLayout';
import WorksListing from '../../components/Worker/Booking/WorksListing';

const CommittedWorksPage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const response = await viewAcceptedWorkAPI();
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);
    return (
        <>
            <Navbar user={false} special={false} />
            <ProfileLayout component={<WorksListing/>} />
        </>
    )
}

export default CommittedWorksPage