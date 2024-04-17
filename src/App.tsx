import Login from "./components/worker/Login";
import WorkerRegister from "./components/worker/WorkerRegister";
import UserLanding from "./pages/user/UserLanding"
import WorkerLanding from "./pages/worker/WorkerLanding";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";





function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLanding/>} />
          <Route path="/worker" element={<WorkerLanding />} />
          <Route path="/worker/login" element={<Login />} />
          <Route path="/worker/register" element={<WorkerRegister />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
