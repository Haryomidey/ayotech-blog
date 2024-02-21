import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Layouts from "../layouts";
import User from "../pages/User";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/register" element={<Register />} />
                <Route path='/' element={<Layouts />}>
                    <Route path="/admin/blogs" element={<Home />} />
                    <Route path="/admin/users" element={<User />} />
                    <Route path="/" element={<Navigate to="/admin/users" replace />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
