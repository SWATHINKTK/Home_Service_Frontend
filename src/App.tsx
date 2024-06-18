
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

import AdminPrivateRouter from "./routes/PrivateRoutes/AdminPrivateRouter";
import WorkerRegisterStep2 from "./pages/worker/WorkerRegisterStep2";
import WorkerPrivateRouter from "./routes/PrivateRoutes/WorkerPrivateRouter";

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
import WorkHistoryPage from "./pages/worker/WorkHistoryPage";
import AdminRouter from "./routes/AdminRouter";
import WorkerRouter from "./routes/WorkerRouter";
import UserRouter from "./routes/UserRouter";










function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<UserRouter/>}/>
          <Route path="/worker/*" element={<WorkerRouter/>}/>
          <Route path="/admin/*" element={<AdminRouter />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
