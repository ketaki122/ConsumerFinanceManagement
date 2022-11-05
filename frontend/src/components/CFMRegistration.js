import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
export class CFMRegistration extends Component {
  render() {
    return (
        <div>
        <Grid contaier spacing={1}>
        <Grid>
        <Typography  variant="h3" marginLeft={"12em"}marginTop={"1em"}>Registration</Typography>
        <TextField label='Name' variant="outlined" type='Name'fullWidth/>
        <TextField label='Date of Birth' variant="outlined" type='dob'fullWidth/>
        <TextField label='Email id' variant="outlined" type='username'fullWidth/>
        <TextField label='Phone no.' variant="outlined" type='username'fullWidth/>
        <TextField label='User Name' variant="outlined" type='username'fullWidth/>
        <TextField label='Password' variant="outlined" type='username'fullWidth/>
        <TextField label='Confirm Password' variant="outlined" type='username'fullWidth/>
        <TextField label='Address' variant="outlined" type='username'fullWidth/>
        <TextField label='Card Type' variant="outlined" type='username'fullWidth/>
        <TextField label='Select Bank' variant="outlined" type='username'fullWidth/>
        <TextField label='Saving Account No:' variant="outlined" type='username'fullWidth/>
        <TextField label='IFSC code' variant="outlined"type='password' fullWidth/>
        <Button  variant='contained' color='primary'type='submit'marginLeft={"1em"}>Submit</Button>
        </Grid>
        <Grid item sm/>
        
        </Grid>
    
        </div>
    )
  }
}

export default CFMRegistration