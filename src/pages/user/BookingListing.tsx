import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import BookedServices from '../../components/User/BookingDetails/ListBookings'
import ProfileLayout from '../../components/User/ProfileLayout/ProfileLayout'

const BookingListing: React.FC = () => {
    return (
        <>
            <Navbar user={true} special={false} />
            <ProfileLayout component={<BookedServices />}  head={'Booked Services'}/>
        </>
    )
}

export default BookingListing
