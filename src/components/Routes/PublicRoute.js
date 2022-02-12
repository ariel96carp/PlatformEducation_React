import { Navigate } from "react-router-dom"

const PublicRoute = ({ children }) => {
    const isAuth = localStorage.getItem("educationToken")
    return !isAuth ? children : <Navigate to="/" />
}

export default PublicRoute
