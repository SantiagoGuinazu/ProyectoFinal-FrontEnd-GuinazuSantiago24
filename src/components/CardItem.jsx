import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../hooks/useProductStore";

export const CardItem = ({ _id, title, description, code, price, stock, category, thumbnail }) => {

    const { startProductActivo } = useProductStore();
    const navigate = useNavigate();

    const onClickCard = () => {
        startProductActivo({ _id, title, description, code, price, stock, category, thumbnail });
        navigate(`/product/${_id}`);
    };

    return (
            <Card sx={{ maxWidth: 345 }} onClick={onClickCard}>
                <CardHeader
                    title={title}
                    subheader={`Precio: ${price}`}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="logo.jpg"
                    alt={title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Typography ml={2}>Stock: {stock}</Typography>
                <Box display='flex' alignItems='center'>
                    <Typography ml={2}>Agregar al carrito</Typography>
                    <CardActions disableSpacing>
                        <IconButton aria-label="share">
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </CardActions>
                </Box>
            </Card>

    )
}