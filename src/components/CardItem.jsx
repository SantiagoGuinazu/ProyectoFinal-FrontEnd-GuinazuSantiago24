import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../hooks/useProductStore";

export const CardItem = ({ _id, title, description, code, price, stock, category, thumbnails }) => {

    const { startProductActivo } = useProductStore();
    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/product/${_id}`);
        startProductActivo({ _id, title, description, code, price, stock, category, thumbnails });
    };

    return (
        <Card sx={{ maxWidth: 300, boxShadow: 1, borderRadius: 2 }} onClick={onClickCard}>
            <CardHeader />
            <CardMedia
                component='img'
                height='200'
                image={thumbnails}
                alt={title}
                style={{ objectFit: 'contain', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />

            <CardContent>
                <Typography variant='h6'>{title}</Typography>
                <Typography variant='body2' color='text.secondary'>{description}</Typography>
                <Typography variant='body2' color='text.secondary'>Precio: ${price}</Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center' }}>
                <Typography><Link to={`/product/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>Ver más...</Link></Typography>
            </CardActions>
        </Card>
    )
}