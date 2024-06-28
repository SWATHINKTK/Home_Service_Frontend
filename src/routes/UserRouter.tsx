import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserPrivateRouter from './PrivateRoutes/UserPrivateRouter';
import MainLoader from '../components/Common/Loader/MainLoader';

const UserLanding = lazy(() => import('../pages/user/UserLanding'));
const ServicePage = lazy(() => import('../pages/user/ServicePage'));
const ServiceDetailsPage = lazy(() => import('../pages/user/serviceDetailsPage'));
const LocationSelectingPage = lazy(() => import('../pages/user/LocationSelectingPage'));
const BookingPage = lazy(() => import('../pages/user/BookingPage'));
const BookingListing = lazy(() => import('../pages/user/BookingListing'));
const Failed = lazy(() => import('../components/User/Bookings/Failed'));
const CompletedBooking = lazy(() => import('../pages/user/CompletedBooking'));
const Success = lazy(() => import('../components/User/Bookings/PaymentSuccess'));
const UserOTPPage = lazy(() => import('../pages/user/UserOTPPage'));
const UserLogin = lazy(() => import('../pages/user/UserLogin'));
const UserRegistration = lazy(() => import('../pages/user/UserRegistration'));
const ProfileLayout = lazy(() => import('../components/Common/ProfileLayout/UserProfileLayout'));
const UserProfile = lazy(() => import('../components/User/Profile/UserProfile'));
const Conversation = lazy(() => import('../components/Common/Chat/Conversation'));
const About = lazy(() => import('../components/Common/About/About'));


const UserRouter: React.FC = () => {
    return (
        <Suspense fallback={<MainLoader/>}>
            <Routes>
                <Route element={<UserPrivateRouter />}>
                    <Route path='/user/*' element={<ProfileLayout />}>
                        <Route path='accountInformation' element={<UserProfile />} />
                        <Route path="bookingHistory" element={<CompletedBooking />} />
                        <Route path="bookedServices" element={<BookingListing />} />
                        <Route path="chat/:conversationId" element={<Conversation />} />
                    </Route>
                    {/* <Route path="/service" element={<ServicePage />} />
                <Route path="/service/:serviceId" element={<ServiceDetailsPage />} /> */}
                    <Route path="/service/:serviceId/currentLocation" element={<LocationSelectingPage />} />
                    <Route path="/service/:serviceId/booking" element={<BookingPage />} />
                    <Route path="/failed" element={<Failed />} />
                </Route>

                <Route path="/" element={<UserLanding />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
                <Route path="/success" element={<Success />} />
                <Route path="/otpVerification" element={<UserOTPPage />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/register" element={<UserRegistration />} />
                <Route path="/about" element={<About worker={false} />} />
            </Routes>
        </Suspense>
    )
}

export default UserRouter
