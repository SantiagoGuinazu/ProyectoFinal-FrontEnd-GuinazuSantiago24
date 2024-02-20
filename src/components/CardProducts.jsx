
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CardProducts = () => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader 
            title="Shrimp and Chorizo Paella" 
            subheader="Precio: $1000"/>
            <CardMedia
                component="img"
                height="194"
                image="logo.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <Box display='flex' alignItems='center'>
                <Typography ml={2}>Agregar al carrito</Typography>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    );
}