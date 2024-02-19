import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { InicioPage } from "../pages/InicioPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<InicioPage />} />
            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/auth/register' element={<RegisterPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
