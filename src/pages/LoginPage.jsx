import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Grid container 
    spacing={0} 
    direction='column' 
    alignItems='center' 
    justifyContent='center' 
    sx={{minHeight:'90vh'}}
    >
      <Grid item>
        <TextField type='email' 
          label="Email" 
          variant="outlined" 
          size='small' 
        />
      </Grid>
      <Grid item mt={1}>
        <TextField type='password' 
          label="Password" 
          variant="outlined" 
          size='small' 
        />
      </Grid>
      <Grid item mt={1}>
        <Button variant="outlined">Iniciar Sesion</Button>
      </Grid>
    </Grid>
  )
}
