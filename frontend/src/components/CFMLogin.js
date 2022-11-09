import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link ,Navigate} from "react-router-dom";


class CFMLogin extends Component {

  constructor(props){
    super(props);
this.state={
    username:'',
    password:'',
    login:this.props.login
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
if(this.state.username==this.props.user&&this.state.password==this.props.pass){
  console.log("Pass in login"+this.props.pass);
  this.props.setlogin(true);
  
}else{
  alert("Invalid credentials, try again!");
  this.props.setlogin(false);
}
this.setState({login:this.props.login});


}


  render() {
    console.log("currpass:"+this.props.pass);
    return (

        <Grid textAlign={'center'}  container >
        
        <Grid  item sm xs={12}/>
       
        <Grid item sm>
        <Typography  variant="h3" margin={'10px auto 10px auto'}>Login</Typography>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
        <TextField  label='Username' name='username' value={this.state.username} variant="outlined" margin='normal' onChange={this.handleChange} type='username' fullWidth />
        <TextField  label='Password' name='password' value={this.state.password} variant="outlined" margin='normal' onChange={this.handleChange} type='password' fullWidth/>
        <Button   variant='contained' color='primary'type='submit'>LOGIN</Button><p></p>
        {this.state.login && (
          <Navigate to="/Dashboard" replace={true} />
        )}
        </form><p><a href='ForgotPassword'>Forgot Password?</a></p>
        <p style={{marginLeft:'62%'}} >New User? <a href='/register'>Register here</a></p>
        </Grid>
        
        <Grid  item sm xs={12}/> 
        <Grid item  xs={12}>
        <p  > <a style={{fontSize:"20px",color:"purple"}} href='/AdminLogin'>Login as a Admin</a></p>
          </Grid>   
     
        </Grid>  
            

        

    )
  }
}

export default CFMLogin