import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Course from "../pages/Course"
import Courses from "../pages/Courses"
import Teachers from "../pages/Teachers"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Specialities from "../pages/Specialities"
import Speciality from "../pages/Speciality"
import Class from "../pages/Class"
import Page404 from "../pages/Page404"
import ProtectedRoute from "../routes/ProtectedRoute"
import PublicRoute from "../routes/PublicRoute"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />        
                    </ProtectedRoute>}>
                </Route>
                <Route path="/especialidades" element={
                    <ProtectedRoute>
                        <Specialities />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/especialidades/:id" element={
                    <ProtectedRoute>
                        <Speciality />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/cursos" element={
                    <ProtectedRoute>
                        <Courses />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/cursos/:id" element={
                    <ProtectedRoute>
                        <Course />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/clase" element={
                    <ProtectedRoute>
                        <Class />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/profesores" element={
                    <ProtectedRoute>
                        <Teachers />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/registro" element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>}>
                </Route>
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>}>
                </Route>
                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </main>
    )
}

export default Main
