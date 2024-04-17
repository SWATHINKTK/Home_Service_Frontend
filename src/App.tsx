import Login from "./components/worker/Login";
import UserLanding from "./pages/user/UserLanding"
import WorkerLanding from "./pages/worker/WorkerLanding";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";





function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user" element={<UserLanding/>} />
          <Route path="/worker" element={<WorkerLanding />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
