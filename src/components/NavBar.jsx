import { Avatar, Button, Badge, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useAuthStore } from "../hooks/useAuthStore";
import { useCartStore } from "../hooks/useCartStore";

export const NavBar = () => {

    const { name, status, isAdmin, startLogout } = useAuthStore();
    const { cart } = useCartStore();

    const onLogout = () => startLogout();

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#4d4d4d",
            lineHeight: 1.6,
        }}>
            <div style={{ display: "flex", alignItems: "center", margin: "5px", padding: "5px", marginLeft: "20px" }}>
                <NavLink to="/">
                    <Avatar alt="logo" src="../logo.jpg" sx={{ width: 56, height: 56 }} />
                </NavLink>
                <Typography style={{color: "whitesmoke", fontFamily:"'Courier New', Courier, monospace", padding: "20px", fontSize: "2em", fontWeight: "bold", }}>Ecommerce Santiago Guinazu - Front</Typography>
                <div>
                    {
                        isAdmin &&
                        <NavLink
                            to="/admin-product"
                            className="navbar-brand"
                            style={{ marginLeft: "15px" }}>Admin Products</NavLink>
                    }
                </div>
            </div>

            <div style={{ marginRight: "50px" }}>

                <NavLink
                    to={`${status === "not-authenticated" ? "/auth/login" : "/mi-carrito"}`}
                    className="navbar-brand"
                    style={{ marginRight: "15px" }}>
                    <Badge badgeContent={cart?.products.length} color="primary">
                        <LocalGroceryStoreOutlinedIcon />
                    </Badge>
                </NavLink>

                <NavLink
                    to={`${status === "not-authenticated" ? "/auth/login" : "/mis-compras"}`}
                    className="navbar-brand"
                    style={{ marginRight: "15px" }}>Mis compras</NavLink>
                <NavLink
                    to={`${status === "not-authenticated" ? "/auth/login" : "/chat"}`}
                    className="navbar-brand"
                    style={{ marginRight: "15px" }}>Chat</NavLink>
                {
                    status === "authenticated"
                        ?
                        <>
                            <NavLink
                                className="navbar-brand"
                                style={{ marginRight: "15px" }}>{name.toUpperCase()}</NavLink>
                            <Button onClick={onLogout}>Cerrar sesión</Button>
                        </>
                        :
                        <>
                            <NavLink
                                to="/auth/register"
                                className="navbar-brand"
                                style={{ marginRight: "15px" }}>Crear cuenta</NavLink>
                            <NavLink
                                to="/auth/login"
                                className="navbar-brand"
                                style={{ marginRight: "15px" }}>Ingresar</NavLink>
                        </>
                }
            </div>
        </div >
    )
};
