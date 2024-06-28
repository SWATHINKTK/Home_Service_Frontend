import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import WorkerPrivateRouter from './PrivateRoutes/WorkerPrivateRouter';
import MainLoader from '../components/Common/Loader/MainLoader';

const WorkerLanding = lazy(() => import('../pages/worker/WorkerLanding'));
const WorkListPage = lazy(() => import('../pages/worker/WorkListPage'));
const CommittedWorksPage = lazy(() => import('../pages/worker/CommittedWorksPage'));
const WorkerLogin = lazy(() => import('../pages/worker/WorkerLogin'));
const WorkerRegister = lazy(() => import('../pages/worker/WorkerRegister'));
const WorkHistoryPage = lazy(() => import('../pages/worker/WorkHistoryPage'));
const WorkerOTP = lazy(() => import('../pages/worker/WorkerOTP'));
const WorkerRegisterStep2 = lazy(() => import('../pages/worker/WorkerRegisterStep2'));
const ProfileLayout = lazy(() => import('../components/Common/ProfileLayout/WorkerProfileLayout'));
const WorkerProfile = lazy(() => import('../components/Worker/Profile/WorkerProfile'));
const Conversation = lazy(() => import('../components/Common/Chat/Conversation'));
const About = lazy(() => import('../components/Common/About/About'));
const Payments = lazy(() => import('../components/Worker/Payments/Payments'));


const WorkerRouter: React.FC = () => {
    return (
        <Suspense fallback={<MainLoader />}>
            <Routes>
                <Route element={<WorkerPrivateRouter />}>
                    <Route path="/" element={<WorkerLanding />} />
                    <Route path="/bookings" element={<WorkListPage />} />
                    <Route path="/profile/*" element={<ProfileLayout />}>
                        <Route path="accountInformation" element={<WorkerProfile />} />
                        <Route path="committedWorks" element={<CommittedWorksPage />} />
                        <Route path="chat/:conversationId" element={<Conversation />} />
                        <Route path="booking/history" element={<WorkHistoryPage />} />
                        <Route path="payments" element={<Payments />} />
                    </Route>
                </Route>

                <Route path="/login" element={<WorkerLogin />} />
                <Route path="/register" element={<WorkerRegister />} />
                <Route path="/register/otp" element={<WorkerOTP />} />
                <Route path="/register/upload" element={<WorkerRegisterStep2 />} />
                <Route path="/about" element={<About worker={true} />} />
            </Routes>
        </Suspense>
    )
}

export default WorkerRouter
