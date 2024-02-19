import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../api/requestApi";

export const useAuthStore = () => {

    const dispatch = useDispatch();
    const {
        _id,
        name,
        lastName,
        email,
        rol,
        cart_id,
        status,
        isAdmin,
    } = useSelector(state => state.auth);

    const startLogin = async(email, password) => {
        await loginUser(email,password);
    }

    const startRegister = async(email, password, name, lastName) => {
        await registerUser(email, password, name, lastName);
    }

    const startLogout = async() => {
        
    }

    const startCheckingLogin = async() => {
        
    }


    return {
        _id,
        name,
        lastName,
        email,
        rol,
        cart_id,
        status,
        isAdmin,

        startLogin,
        startRegister,
    };
};