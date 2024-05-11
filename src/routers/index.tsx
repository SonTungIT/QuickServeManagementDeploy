import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRouter
