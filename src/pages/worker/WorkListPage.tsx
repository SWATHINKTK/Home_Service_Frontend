import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ProfileLayout from '../../components/Worker/Profile/WorkerProfileLayout'
import ListBooking from '../../components/Worker/Booking/ListBookings'

const WorkListPage: React.FC = () => {
    return (
        <>
            <Navbar user={false} special={false} />
            <ProfileLayout component={<ListBooking/>} />
        </>
    )
}

export default WorkListPage
