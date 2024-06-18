import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPrivateRouter from './PrivateRoutes/UserPrivateRouter'
import UserLanding from '../pages/user/UserLanding'
import UserProfilePage from '../pages/user/UserProfilePage'
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

const UserRouter:React.FC = () => {
  return (
    <Routes>
      <Route element={<UserPrivateRouter />}>
        <Route path="/" element={<UserLanding />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/service/:serviceId/currentLocation" element={<LocationSelectingPage />} />
        <Route path="/service/:serviceId/booking" element={<BookingPage />} />
        <Route path="/bookedServices" element={<BookingListing />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/bookingHistory" element={<CompletedBooking />} />
        <Route path="/chat/:conversationId" element={<BookingListing />} />
      </Route>
      <Route path="/success" element={<Success/>} />
      <Route path="/otpVerification" element={<UserOTPPage/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/register" element={<UserRegistration/>} />
    </Routes>)
}

export default UserRouter
