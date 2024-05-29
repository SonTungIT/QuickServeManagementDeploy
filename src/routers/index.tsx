import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import RegisterAccount from "../pages/register/RegisterAccount"
import AccountManagement from "../pages/account-management/AccountManagement"
import UserProfile from "../pages/user-profile/UserProfile"
import StoreManagement from "../pages/store-manager/StoreManagement/StoreManagement"
const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/user-profile" element={<UserProfile />} />

            {/* Admin */}
            <Route path="/admin-home" element={<Home />} />
            <Route path="/admin-account" element={<AccountManagement />} />
            <Route path="/admin-register" element={<RegisterAccount />} />

            {/* Store Manager */}
            <Route path="/store-management" element={<StoreManagement />} />

        </Routes >
    )
}

export default AppRouter
