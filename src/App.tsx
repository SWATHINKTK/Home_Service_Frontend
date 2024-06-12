
import UserLanding from "./pages/user/UserLanding"
import WorkerLanding from "./pages/worker/WorkerLanding";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import WorkerLogin from "./pages/worker/WorkerLogin";
import WorkerRegister from "./pages/worker/WorkerRegister";
import WorkerOTP from "./pages/worker/WorkerOTP";
import UserLogin from "./pages/user/UserLogin";
import UserRegistration from "./pages/user/UserRegistration";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import PrivateRouter from "./utils/privateRouters/PrivateRouter";
import UserOTPPage from "./pages/user/UserOTPPage";

import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminServiceViewPage from "./pages/admin/AdminServiceViewPage";
import AdminServiceAddPage from "./pages/admin/AdminServiceAddPage";
import AdminPrivateRouter from "./utils/privateRouters/AdminPrivateRouter";
import WorkerRegisterStep2 from "./pages/worker/WorkerRegisterStep2";
import AdminWorkerPage from "./pages/admin/AdminWorkerPage";
import WorkerPrivateRouter from "./utils/privateRouters/WorkerPrivateRouter";

import ServicePage from "./pages/user/ServicePage";
import WorkerProfilePage from "./pages/worker/WorkerProfilePage";
import ServiceDetailsPage from "./pages/user/serviceDetailsPage";
import LocationSelectingPage from "./pages/user/LocationSelectingPage";
import BookingPage from "./pages/user/BookingPage";
import BookingListing from "./pages/user/BookingListing";
import UserProfilePage from "./pages/user/UserProfilePage";
import Success from "./components/User/Bookings/PaymentSuccess";
import Failed from "./components/User/Bookings/Failed";
import WorkListPage from "./pages/worker/WorkListPage";
import CommittedWorksPage from "./pages/worker/CommittedWorksPage";
import CompletedBooking from "./pages/user/CompletedBooking";
import SalesReportPage from "./pages/admin/SalesReportPage";
import BookingHistoryPage from "./pages/admin/BookingHistory";










function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRouter />}>
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
          <Route path="/success" element={<Success />} />

          <Route path="/otpVerification" element={<UserOTPPage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route element={<WorkerPrivateRouter />}>
            <Route path="/worker" element={<WorkerLanding />} />
            <Route path="/worker/profile" element={<WorkerProfilePage />} />
            <Route path="/worker/bookings" element={<WorkListPage />} />
            <Route path="/worker/committedWorks" element={<CommittedWorksPage />} />
            <Route path="/worker/chat/:conversationId" element={<CommittedWorksPage />} />
          </Route>

          <Route path="/worker/login" element={<WorkerLogin />} />
          <Route path="/worker/register" element={<WorkerRegister />} />
          <Route path="/worker/register/otp" element={<WorkerOTP />} />
          <Route path="/worker/register/upload"element={<WorkerRegisterStep2 />}/>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<AdminPrivateRouter />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/user" element={<AdminUserPage />} />
            <Route path="/admin/service" element={<AdminServiceViewPage />} />
            <Route path="/admin/addService" element={<AdminServiceAddPage />} />
            <Route path="/admin/worker" element={<AdminWorkerPage />} />
            <Route path="/admin/salesReport" element={<SalesReportPage />} />
            <Route path="/admin/bookings" element={<BookingHistoryPage />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App
