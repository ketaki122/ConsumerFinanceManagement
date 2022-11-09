import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link ,Navigate} from "react-router-dom";

export class CFMForgotPassword extends Component {
  render() {
    return (
      <div style={{marginLeft:"-150px",marginRight:"0px", width:"80%"}}>
        <Grid textAlign={'center'}  container >
        
      <Grid  item sm xs={12}/>
     
      <Grid item sm>
      <Typography  variant="h3" margin={'10px auto 10px auto'}>Forgot Password</Typography>
      <form onSubmit={this.handleSubmit} autoComplete='off'>

      <TextField  label='Enter Phone Number : eg. +919999999999' name='phone'  variant="outlined" margin='normal' onChange={this.handleChange} type='username' fullWidth />
      <Button   variant='contained' color='primary'type='submit'>GET OTP</Button><p></p>
      <TextField  label='Enter 6-digit OTP' name='otp'  variant="outlined" margin='normal' onChange={this.handleChange} type='number' fullWidth/>
      <Button   variant='contained' color='primary'type='submit'>VERIFY OTP</Button><p></p>
    
      </form>
      <p><a href='/userlogin'>Back to Login</a></p>
      </Grid>
      </Grid>

      </div>
    )
  }
}

export default CFMForgotPassword