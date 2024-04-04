import { useEffect, useState } from "react";
import { CardItemCart } from "../components/CardItemCart";
import { NavBar } from "../components/NavBar";
import { useCartStore } from "../hooks/useCartStore";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import axios from "axios"; //MP
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react' //MP

initMercadoPago("TEST-98242cc4-cd29-4e76-8c6a-0264a6b43c6f",{ //MP
    locale:"es-AR",
});//MP

const createPreference = async () => { //MP
    try {
        const response = await axios.post("http://localhost:8080/api/create_preference",{
            title: "Items varios",
            price: total,
            quantity:1,
        })
        const {id} = response.data;
        return id;
    } catch (error) {
        console.log(error)
    }
} //MP

const handleBuy = async () => {//MP
    const id = await createPreference()
    if(id){
        setPreferenceId(id)
    }
}//MP

export const MyCartPage = () => {
    
    const { cart, startConfirmarCompra } = useCartStore();
    const [confirmCompra, setConfirmCompra] = useState(false);
    const [preferenceId, setPreferenceId] = useState(null) //MP
    
    const confirmarCompra = async () => {
        console.log('confirmar compra');
        setConfirmCompra(true);
        await startConfirmarCompra();
        setConfirmCompra(false);
        Swal.fire({
            title: 'Compra exitosa',
            icon: 'success',
        });
    };
    
    if (!cart) {
        return (
            <>
                <NavBar />
                <Typography variant="h4">Cargando carrito...</Typography>
            </>
        );
    };

    const total = cart?.products?.reduce((accumulator, product) => {
        return accumulator + (product.quantity * product.id.price);
    }, 0);

    if (confirmCompra) {
        return (
            <>
                <NavBar />
                <Typography variant="h4">Procesando compra...</Typography>
            </>
        );
    };

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
                    {/*preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />*/}   
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