
import UserLanding from "./pages/user/UserLanding"
import WorkerLanding from "./pages/worker/WorkerLanding";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import WorkerLogin from "./pages/worker/WorkerLogin";
import WorkerRegister from "./pages/worker/WorkerRegister";
import WorkerOTP from "./pages/worker/WorkerOTP";
import UserLogin from "./pages/user/UserLogin";
import UserRegistration from "./pages/user/UserRegistration";
import AdminLogin from "./components/admin/AdminLogin";
import PrivateRouter from "./utils/PrivateRouter";
import UserOTPPage from "./pages/user/UserOTPPage";

import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminServiceViewPage from "./pages/admin/AdminServiceViewPage";
import AdminServiceAddPage from "./pages/admin/AdminServiceAddPage";








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
          <Route path="/worker" element={<WorkerLanding />} />
          <Route path="/worker/login" element={<WorkerLogin />} />
          <Route path="/worker/register" element={<WorkerRegister />} />
          <Route path="/worker/otp" element={<WorkerOTP />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/user" element={<AdminUserPage />} />
          <Route path="/admin/service" element={<AdminServiceViewPage />} />
          <Route path="/admin/addService" element={<AdminServiceAddPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
