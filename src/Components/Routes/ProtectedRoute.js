import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem("onlinePlatform")
    return isAuth ? children : <Navigate to="/login" />
}

export default ProtectedRoute
