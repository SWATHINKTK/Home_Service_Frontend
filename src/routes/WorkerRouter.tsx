import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WorkerPrivateRouter from './PrivateRoutes/WorkerPrivateRouter'
import WorkerLanding from '../pages/worker/WorkerLanding'
import WorkListPage from '../pages/worker/WorkListPage'
import CommittedWorksPage from '../pages/worker/CommittedWorksPage'
import WorkerLogin from '../pages/worker/WorkerLogin'
import WorkerRegister from '../pages/worker/WorkerRegister'
import WorkHistoryPage from '../pages/worker/WorkHistoryPage'
import WorkerOTP from '../pages/worker/WorkerOTP'
import WorkerRegisterStep2 from '../pages/worker/WorkerRegisterStep2'
import ProfileLayout from '../components/Common/ProfileLayout/WorkerProfileLayout'
import WorkerProfile from '../components/Worker/Profile/WorkerProfile'
import Conversation from '../components/Common/Chat/Conversation'
import About from '../components/Common/About/About'
import Payments from '../components/Worker/Payments/Payments'


const WorkerRouter: React.FC = () => {
    return (
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
            <Route path="/about" element={<About user={false} />} />
        </Routes>
    )
}

export default WorkerRouter
