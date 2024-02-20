import { Button, Grid, TextField, Typography } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { useFormik } from "formik";
import * as Yup from "yup";

export const AddProductPage = () => {
    const initialValues = {
        title: '',
        description: '',
        code: '',
        price: '',
        stock: '',
        category: '',
        file: null,
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("El titulo es obligatorio"),
        description: Yup.string().required("La descripcion es obligatoria"),
        code: Yup.string().required("El codigo es obligatorio"),
        price: Yup.number().required("El precio es obligatorio"),
        stock: Yup.number().required("El stock es obligatorio"),
        category: Yup.string().required("La categoria es obligatoria"),
        //file: Yup.mixed().required("El archivo es obligatorio"),
    });

    const { values, handleChange, errors, setValues } = useFormik({
        initialValues,
        validationSchema,
    });

    const { title, description, code, price, stock, category, file } = values;

    const disabled = (title != '' && description != '' && code != '' && price != '' && stock != '' && category != '' && file != null) ? false : true;

    const onSubmitForm = () => {
        const isEmpty = Object.keys(errors).lenght === 0;
        if (!isEmpty) return;
    }

    const onFileChange = ({target}) =>{
        //console.log(target.files)
        if(target.file===0) return;

        setValues({
            ...values,
            file:target.files[0],
        })
    }

    return (
        <>
            <NavBar />

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                //justifyContent='center'

                sx={{ minHeight: "100vh", backgroundColor: "lightblue" }}
            >
                <Grid
                    item
                    sx={{
                        width: 450,
                        backgroundColor: "white",
                        borderRadius: 2,
                        padding: 3,
                        mt: 3,
                    }}
                >
                    <Typography variant="h4">Crear Producto</Typography>
                    <Grid container>
                        <Grid item mt={3} xs={12}>
                            <TextField
                                name="title"
                                value={title}
                                label="Titulo"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={handleChange}
                                error={Boolean(errors.title)}
                                helperText={errors.title}
                            />
                        </Grid>

                        <Grid item mt={1} xs={12}>
                            <TextField
                                name="description"
                                value={description}
                                label="Descripcion"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={handleChange}
                                error={Boolean(errors.description)}
                                helperText={errors.description}
                            />
                        </Grid>

                        <Grid item mt={1} xs={12}>
                            <TextField
                                name="code"
                                value={code}
                                label="Codigo"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={handleChange}
                                error={Boolean(errors.code)}
                                helperText={errors.code}
                            />
                        </Grid>

                        <Grid item mt={1} xs={12}>
                            <TextField
                                type="number"
                                name="price"
                                value={price}
                                label="Precio"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={handleChange}
                                error={Boolean(errors.price)}
                                helperText={errors.price}
                            />
                        </Grid>

                        <Grid item mt={1} xs={12}>
                            <TextField
                                type="number"
                                name="stock"
                                value={stock}
                                label="Stock"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={handleChange}
                                error={Boolean(errors.stock)}
                                helperText={errors.stock}
                            />
                        </Grid>

                        <Grid item mt={1} xs={12}>
                            <TextField
                                name="category"
                                value={category}
                                label="Categoria"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={handleChange}
                                error={Boolean(errors.category)}
                                helperText={errors.category}
                            />
                        </Grid>

                        {/*<Grid item mt={1} xs={12}>
                            <TextField
                                name="file"
                                type="file"
                                value={file}
                                label="Imagen"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={handleChange}
                                error={Boolean(errors.file)}
                                helperText={errors.file}
                            />
                        </Grid>*/}

                        <Grid item mt={1} xs={12}>
                            <input 
                                name="file"
                                type="file"
                                onChange={onFileChange}
                                //onChange={handleChange}
                            />
                        </Grid>

                        <Grid item mt={3} xs={12}>
                            <Button
                                disabled={disabled}
                                variant="outlined"
                                onClick={onSubmitForm}
                                fullWidth
                            >
                                Crear Producto
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};