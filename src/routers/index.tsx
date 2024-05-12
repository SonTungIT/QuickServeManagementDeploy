import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import RegisterAccount from "../pages/register/RegisterAccount"
const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-home" element={<Home />} />
            <Route path="/admin-register" element={<RegisterAccount />} />
        </Routes >
    )
}

export default AppRouter
