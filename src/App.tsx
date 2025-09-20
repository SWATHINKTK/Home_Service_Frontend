import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./routes/AdminRouter";
import WorkerRouter from "./routes/WorkerRouter";
import UserRouter from "./routes/UserRouter";
import ScrollToTop from "./components/Common/Scroll/ScrollTop";
import Checkout from "./components/User/Checkout/Checkout";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Routes>
                    <Route path="/*" element={<UserRouter />} />
                    <Route path="/worker/*" element={<WorkerRouter />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                    <Route path="/temp" element={<Checkout/>}></Route>
                    <Route path="/temp/:serviceId" element={<Checkout/>}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App
