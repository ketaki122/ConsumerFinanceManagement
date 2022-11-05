import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';



class CFMLogin extends Component {

  constructor(){
    super();
this.state={
    username:'',
    password:'',
}
}

handleChange=(e)=>{
  this.setState({
      [e.target.name]:e.target.value
  })
}

handleSubmit=(e)=>{
     
  e.preventDefault();
const userdata={
    username:this.state.username,
    password:this.state.password
}
console.log(userdata)


}


  render() {
    
    return (

        <Grid textAlign={'center'}  container >
        
        <Grid  item sm xs={12}/>
        <Grid item sm>
        <Typography  variant="h3" margin={'10px auto 10px auto'}>Login</Typography>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
        <TextField  label='Username' name='username' value={this.state.username} variant="outlined" margin='normal' onChange={this.handleChange} type='username' fullWidth />
        <TextField  label='Password' name='password' value={this.state.password} variant="outlined" margin='normal' onChange={this.handleChange} type='password' fullWidth/>
        <Button   variant='contained' color='primary'type='submit'>Submit</Button><p></p>
        
        </form><p><a href='ForgotPassword'>Forgot Password?</a></p>
        <p style={{marginLeft:'62%'}} >New User? <a href='/register'>Register here</a></p>
        </Grid>
        
        <Grid  item sm xs={12}/>    
        </Grid>        

        

    )
  }
}

export default CFMLogin