import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./routes/AdminRouter";
import WorkerRouter from "./routes/WorkerRouter";
import UserRouter from "./routes/UserRouter";
import Error404 from "./components/Common/Error/Error404";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<UserRouter />} />
                    <Route path="/worker/*" element={<WorkerRouter />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                    <Route path="/temp" element={<Error404/>}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App
