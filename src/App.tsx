
import UserLanding from "./pages/user/UserLanding"
import WorkerLanding from "./pages/worker/WorkerLanding";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import WorkerLogin from "./pages/worker/WorkerLogin";
import WorkerRegister from "./pages/worker/WorkerRegister";
import WorkerOTP from "./pages/worker/WorkerOTP";





function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLanding/>} />
          <Route path="/worker" element={<WorkerLanding />} />
          <Route path="/worker/login" element={<WorkerLogin/>} />
          <Route path="/worker/register" element={<WorkerRegister />} />
          <Route path="/worker/otp" element={<WorkerOTP />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
