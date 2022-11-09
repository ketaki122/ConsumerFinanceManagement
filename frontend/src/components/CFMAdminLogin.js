import  { Component } from 'react'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link ,Navigate} from "react-router-dom";


export class CFMAdminLogin extends Component {
  constructor(props){
    super(props);
this.state={
    username:'',
    password:'',
    login:this.props.adminlogin
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
if(this.state.username=="admin"&&this.state.password=="admin@123"){
  this.props.setAdminlogin(true);
}else{
  alert("Invalid credentials, try again!");
  this.props.setAdminlogin(false);
}

this.setState({login:this.props.adminlogin});
}


  render() {
    
    return (

        <Grid textAlign={'center'}  container >
        
        <Grid  item sm xs={12}/>
        <Grid item sm>
        <Typography  variant="h3" margin={'10px auto 10px auto'}>ADMIN LOGIN</Typography>
        {this.state.login && (
          <Navigate to="/AdminDashboard" replace={true} />
        )}
        <form onSubmit={this.handleSubmit} autoComplete='off'>
        <TextField  label='Username' name='username' value={this.state.username} variant="outlined" margin='normal' onChange={this.handleChange} type='username' fullWidth />
        <TextField  label='Password' name='password' value={this.state.password} variant="outlined" margin='normal' onChange={this.handleChange} type='password' fullWidth/>
        <Button   variant='contained' color='primary'type='submit'>Submit</Button><p></p>
        
        </form>
        <p >Not an Admin? <a href='/userlogin'>Login as a User</a></p>
        </Grid>
        
        <Grid  item sm xs={12}/>    
        </Grid>        

        

    )
  }
}

export default CFMAdminLogin