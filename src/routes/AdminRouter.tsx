import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AdminServiceViewPage from '../pages/admin/AdminServiceViewPage'
import AdminUserPage from '../pages/admin/AdminUserPage'
import AdminServiceAddPage from '../pages/admin/AdminServiceAddPage'
import AdminWorkerPage from '../pages/admin/AdminWorkerPage'
import SalesReportPage from '../pages/admin/SalesReportPage'
import BookingHistoryPage from '../pages/admin/BookingHistory'
import AdminPrivateRouter from './PrivateRoutes/AdminPrivateRouter'
import AdminLogin from '../components/Admin/Login/AdminLogin'

const AdminRouter: React.FC = () => {
    return (
        <Routes>
            <Route element={<AdminPrivateRouter />}>
                <Route path="/" element={<AdminDashboardPage />} />
                <Route path="/user" element={<AdminUserPage />} />
                <Route path="/service" element={<AdminServiceViewPage />} />
                <Route path="/addService" element={<AdminServiceAddPage />} />
                <Route path="/worker" element={<AdminWorkerPage />} />
                <Route path="/salesReport" element={<SalesReportPage />} />
                <Route path="/bookings" element={<BookingHistoryPage />} />
            </Route>
            <Route path="/login" element={<AdminLogin />} />
        </Routes>
    )
}

export default AdminRouter
