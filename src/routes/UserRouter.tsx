import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPrivateRouter from './PrivateRoutes/UserPrivateRouter'
import UserLanding from '../pages/user/UserLanding'
import ServicePage from '../pages/user/ServicePage'
import ServiceDetailsPage from '../pages/user/serviceDetailsPage'
import LocationSelectingPage from '../pages/user/LocationSelectingPage'
import BookingPage from '../pages/user/BookingPage'
import BookingListing from '../pages/user/BookingListing'
import Failed from '../components/User/Bookings/Failed'
import CompletedBooking from '../pages/user/CompletedBooking'
import Success from '../components/User/Bookings/PaymentSuccess'
import UserOTPPage from '../pages/user/UserOTPPage'
import UserLogin from '../pages/user/UserLogin'
import UserRegistration from '../pages/user/UserRegistration'
import ProfileLayout from '../components/Common/ProfileLayout/UserProfileLayout'
import UserProfile from '../components/User/Profile/UserProfile'
import Conversation from '../components/Common/Chat/Conversation'

const UserRouter: React.FC = () => {
    return (
        <Routes>
            <Route element={<UserPrivateRouter />}>
                <Route path="/" element={<UserLanding />} />
                <Route path='/user/*' element={<ProfileLayout />}>
                    <Route path='accountInformation' element={<UserProfile />} />
                    <Route path="bookingHistory" element={<CompletedBooking />} />
                    <Route path="bookedServices" element={<BookingListing />} />
                    <Route path="chat/:conversationId" element={<Conversation />} />
                </Route>
                <Route path="/service" element={<ServicePage />} />
                <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
                <Route path="/service/:serviceId/currentLocation" element={<LocationSelectingPage />} />
                <Route path="/service/:serviceId/booking" element={<BookingPage />} />
                <Route path="/failed" element={<Failed />} />
            </Route>
            <Route path="/success" element={<Success />} />
            <Route path="/otpVerification" element={<UserOTPPage />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegistration />} />
        </Routes>)
}

export default UserRouter
