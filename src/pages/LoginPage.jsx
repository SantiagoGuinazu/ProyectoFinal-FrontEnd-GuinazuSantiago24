import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export const LoginPage = () => {

  const initialValues = {
    email:'',
    password:''
  };

  const validationSchema = Yup.object({
    email:Yup.string().required('El email es obligatorio').email('Email Invalido'),
    password:Yup.string().required('El password es obligatorio').min(6,'La password debe tener al menos 6 caracteres'),
  })

  const { values, handleChange, errors } = useFormik({initialValues, validationSchema});

  const { email, password } = values;

  return (
    <Grid container 
    spacing={0} 
    direction='column' 
    alignItems='center' 
    justifyContent='center' 
    sx={{minHeight:'100vh', backgroundColor: 'lightblue'}}
    >
      <Grid item sx={{width: 450, backgroundColor: 'white', borderRadius:2, padding: 3}}>

        <Typography variant='h4'>Login</Typography>

        <Grid container>

          <Grid item mt={3} xs={12}>
            <TextField 
              name='email'
              value={email}
              type='email' 
              label="Email" 
              variant="outlined" 
              size='small' 
              fullWidth
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>

          <Grid item mt={1} xs={12}>
            <TextField 
              name='password'
              value={password}
              type='password' 
              label="Password" 
              variant="outlined" 
              size='small' 
              fullWidth
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </Grid>

          <Grid item mt={3} xs={12}>
            <Button variant="outlined" fullWidth>Iniciar Sesion</Button>
          </Grid>

          <Grid container direction='row' justifyContent='end' mt={2}>
            <a href="/auth/register">¿No tienes cuenta? Registrarse</a>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}
