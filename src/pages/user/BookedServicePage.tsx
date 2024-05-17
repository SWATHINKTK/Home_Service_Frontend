import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import BookedServices from '../../components/User/Booking/BookedServices'
import ProfileLayout from '../../components/User/ProfileLayout/ProfileLayout'

const BookedServicePage: React.FC = () => {
    return (
        <>
            <Navbar user={true} special={false} />
            <ProfileLayout component={<BookedServices />} />
        </>
    )
}

export default BookedServicePage
