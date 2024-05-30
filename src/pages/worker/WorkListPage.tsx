import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar';
import WorksListing from '../../components/Worker/Booking/WorksListing';

const WorkListPage: React.FC = () => {
    return (
        <>
            <Navbar user={false} special={false} />
            <WorksListing/>
        </>
    )
}

export default WorkListPage
