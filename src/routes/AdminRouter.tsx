import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPrivateRouter from './PrivateRoutes/AdminPrivateRouter';
import MainLoader from '../components/Common/Loader/MainLoader';

const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage'));
const AdminServiceViewPage = lazy(() => import('../pages/admin/AdminServiceViewPage'));
const AdminUserPage = lazy(() => import('../pages/admin/AdminUserPage'));
const AdminServiceAddPage = lazy(() => import('../pages/admin/AdminServiceAddPage'));
const AdminWorkerPage = lazy(() => import('../pages/admin/AdminWorkerPage'));
const SalesReportPage = lazy(() => import('../pages/admin/SalesReportPage'));
const BookingHistoryPage = lazy(() => import('../pages/admin/BookingHistory'));
const AdminLogin = lazy(() => import('../components/Admin/Login/AdminLogin'));

const AdminRouter: React.FC = () => {
    return (
        <Suspense fallback={<MainLoader/>}>
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
        </Suspense>
    )
}

export default AdminRouter
