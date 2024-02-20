import { Button, Container, Grid, Typography } from "@mui/material";
import { NavBar } from "../components/NavBar"
import { useProductStore } from "../hooks/useProductStore"

export const ProductPage = () => {

    const {product} = useProductStore();
    
    return(
        <>
            <NavBar/>
            <Container masWidth='sm'>
                <Grid container spacing={0} direction='column'>
                    <Grid item mt={1} mb={1}>
                        <Typography>Titulo: {product?.title}</Typography>
                        <Typography>Descripcion: {product?.description}</Typography>
                        <Typography>Stock: {product?.stock}</Typography>
                        <Typography>Precio: ${product?.price}</Typography>
                    </Grid>
                    <Grid item>
                        <Button>Agregar al carrito</Button>
                    </Grid>
                    <Grid item  mb={8}> 
                        <img src={product?.thumbnail} alt={product?.title} width='50%'/>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}