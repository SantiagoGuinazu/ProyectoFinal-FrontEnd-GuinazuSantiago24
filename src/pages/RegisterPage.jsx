import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { NavBarCito } from '../components/Navbarcito';

export const RegisterPage = () => {

  const initialValues = {
    email:'',
    password:'',
    name:'',
    lastName:'',
  };

  const validationSchema = Yup.object({
    email:Yup.string().required('El email es obligatorio').email('Email Invalido'),
    name:Yup.string().required('El Name es obligatorio').min(3,'El Name debe tener al menos 3 caracteres'),
    lastName:Yup.string().required('El LastName es obligatorio').min(3,'El LastName debe tener al menos 3 caracteres'),
    password:Yup.string().required('El password es obligatorio').min(6,'La password debe tener al menos 6 caracteres'),
  });

  const { values, handleChange, errors } = useFormik({initialValues, validationSchema});
  const {startRegister} = useAuthStore();

  const { email, password, name, lastName } = values;
  
  const disabled = (email!='' && password!='' && name!='' && lastName!='') ? false:true;

  const onSubmitForm = () => {
    const isEmpty = Object.keys(errors).lenght === 0;
    if(isEmpty) return;
    startRegister(email, password, name, lastName);
  };

  return (
    <Grid container 
    spacing={0} 
    direction='column' 
    alignItems='center' 
    justifyContent='center' 
    sx={{minHeight:'100vh', backgroundColor: 'lightgreen'}}
    >
      <Grid item sx={{width: 450, backgroundColor: 'white', borderRadius:2, padding: 3}}>
      <NavBarCito/>
        <Typography variant='h4'>Registro</Typography>

        <Grid container>

          <Grid item mt={3} xs={12}>
            <TextField  
              name='name'
              value={name}
              label="Name" 
              variant="outlined" 
              size='small' 
              fullWidth
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              autoComplete="off"
            />
          </Grid>

          <Grid item mt={1} xs={12}>
            <TextField 
              name='lastName'
              value={lastName}
              label="LastName" 
              variant="outlined" 
              size='small' 
              fullWidth
              onChange={handleChange}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              autoComplete="off"
            />
          </Grid>

          <Grid item mt={1} xs={12}>
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
              autoComplete="off"
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
              autoComplete="off"
            />
          </Grid>

          <Grid item mt={3} xs={12}>
            <Button 
              disabled={disabled}
              onClick={onSubmitForm} 
              variant="outlined" 
              fullWidth
            >
              Registrarse
            </Button>
          </Grid>

          <Grid container direction='row' justifyContent='end' mt={2}>
            <Link to='/auth/login'>¿Ya tienes cuenta? Login</Link>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
};