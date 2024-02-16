import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'

export const LoginPage = () => {
  return (
    <Grid container 
    spacing={0} 
    direction='column' 
    alignItems='center' 
    justifyContent='center' 
    sx={{minHeight:'100vh', backgroundColor: 'lightgreen'}}
    >
      <Grid item sx={{width: 450, backgroundColor: 'white', borderRadius:2, padding: 3}}>

        <Typography variant='h4'>Login</Typography>

        <Grid container>

          <Grid item mt={3} xs={12}>
            <TextField 
              type='email' 
              label="Email" 
              variant="outlined" 
              size='small' 
              fullWidth
            />
          </Grid>

          <Grid item mt={1} xs={12}>
            <TextField 
              type='password' 
              label="Password" 
              variant="outlined" 
              size='small' 
              fullWidth
            />
          </Grid>

          <Grid item mt={3} xs={12}>
            <Button variant="outlined" fullWidth>Iniciar Sesion</Button>
          </Grid>

          <Grid container direction='row' justifyContent='end' mt={2}>
            <a href="/auth/register">Registrarse</a>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}
