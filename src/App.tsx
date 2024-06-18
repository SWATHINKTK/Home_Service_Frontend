import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./routes/AdminRouter";
import WorkerRouter from "./routes/WorkerRouter";
import UserRouter from "./routes/UserRouter";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<UserRouter />} />
                    <Route path="/worker/*" element={<WorkerRouter />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                </Routes>
            </Router>
        </>
    );
}

export default App
