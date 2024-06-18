import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WorkerPrivateRouter from './PrivateRoutes/WorkerPrivateRouter'
import WorkerLanding from '../pages/worker/WorkerLanding'
import WorkerProfilePage from '../pages/worker/WorkerProfilePage'
import WorkListPage from '../pages/worker/WorkListPage'
import CommittedWorksPage from '../pages/worker/CommittedWorksPage'
import WorkerLogin from '../pages/worker/WorkerLogin'
import WorkerRegister from '../pages/worker/WorkerRegister'
import WorkHistoryPage from '../pages/worker/WorkHistoryPage'
import WorkerOTP from '../pages/worker/WorkerOTP'
import WorkerRegisterStep2 from '../pages/worker/WorkerRegisterStep2'

const WorkerRouter:React.FC = () => {
  return (
    <Routes>
        <Route element={<WorkerPrivateRouter/>}>
            <Route path="/" element={<WorkerLanding />} />
            <Route path="/profile" element={<WorkerProfilePage/>} />
            <Route path="/bookings" element={<WorkListPage/>} />
            <Route path="/committedWorks" element={<CommittedWorksPage/>} />
            <Route path="/chat/:conversationId" element={<CommittedWorksPage/>} />
            <Route path="/booking/history" element={<WorkHistoryPage/>} />
          </Route>

          <Route path="/login" element={<WorkerLogin/>} />
          <Route path="/register" element={<WorkerRegister/>} />
          <Route path="/register/otp" element={<WorkerOTP/>} />
          <Route path="/register/upload"element={<WorkerRegisterStep2/>}/>
    </Routes>
  )
}

export default WorkerRouter
