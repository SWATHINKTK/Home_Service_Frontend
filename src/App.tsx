
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
import UserProfile from "./pages/user/UserProfilePage";








function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/" element={<UserLanding />} />
          </Route>
          <Route path="/otpVerification" element={<UserOTPPage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route element={<WorkerPrivateRouter />}>
            <Route path="/worker" element={<WorkerLanding />} />
          </Route>
          <Route path="/user/profile" element={<UserProfile />} />

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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
