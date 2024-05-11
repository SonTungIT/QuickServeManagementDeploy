import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />

        </Routes>
    )
}

export default AppRouter
