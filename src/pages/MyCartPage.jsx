import { useEffect, useState } from "react";
import { CardItemCart } from "../components/CardItemCart";
import { NavBar } from "../components/NavBar";
import { useCartStore } from "../hooks/useCartStore";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export const MyCartPage = () => {

    const { cart, startConfirmarCompra } = useCartStore();
    const [confirmCompra, setConfirmCompra] = useState(false);


    if (!cart) {
        return (
            <>
                <NavBar />
                <Typography variant="h4">Cargando carrito...</Typography>
            </>
        );
    }

    const total = cart?.products?.reduce((accumulator, product) => {
        return accumulator + (product.quantity * product.id.price);
    }, 0);

    const confirmarCompra = async () => {
        console.log('confirmar compra');
        setConfirmCompra(true);
        await startConfirmarCompra();
        setConfirmCompra(false);
        Swal.fire({
            title: 'Compra exitosa',
            icon: 'success',
        });
    }

    if (confirmCompra) {
        return (
            <>
                <NavBar />
                <Typography variant="h4">Procesando compra...</Typography>
            </>
        );
    }

    return (
        <>
            <NavBar />
            {
                cart.products.length > 0 &&
                cart.products.map((product) => (
                    <div key={product.id._id} style={{display:'flex', textAlign: 'center', justifyContent: 'center', marginTop: '50px' }}>
                        <CardItemCart  {...product} />
                    </div>
                ))
            }

            {
                cart.products.length > 0 &&
                <>
                    <div style={{display:'flex', textAlign: 'center', justifyContent: 'center', marginTop: '50px' }}>
                        <strong>Total: </strong> ${total.toFixed(2)}
                    </div>
                    <div style={{display:'flex', textAlign: 'center', justifyContent: 'center', marginTop: '50px' }}>
                        <Button variant="contained" color="primary" onClick={confirmarCompra}>Confirmar compra</Button>
                    </div>
                </>
            }

            {
                cart.products.length === 0 &&
                <>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Typography variant="h4">Tu carrito está vacío</Typography>
                        <Typography variant="body1" style={{ marginTop: '20px', marginBottom: '20px' }}>¡Agrega algunos productos para comenzar!</Typography>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                                <Typography variant="button" sx={{ color: 'white' }}>
                                    Ir a comprar
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                </>
            }
        </>
    );
};