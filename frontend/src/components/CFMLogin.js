import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";

class CFMLogin extends Component {

  constructor(props){
    super(props);
this.state={
    uname:'',
    upass:'',
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
    uname:this.state.uname,
    upass:this.state.upass
}
const uname=this.state.uname;
const upass=this.state.upass;
console.log(userdata);
let s=`http://localhost:8080/userRest/api/uservalidate/${uname}/${upass}`;
console.log(s);
axios.get(`http://localhost:8080/userRest/api/uservalidate/${uname}/${upass}`)
.then((data1)=>{console.log("Hi");
console.log(data1);
if(data1.data==2){
  this.props.setlogin(true, this.state.uname,this.state.upass);

}
else if(data1.data==1){
  alert("Username does not exist");
  this.props.setlogin(false,this.state.uname,this.state.upass);
}
else {
 alert("Wrong password")
 this.props.setlogin(false,this.state.uname,this.state.upass);
}
this.setState({login:this.props.login});
})
.catch((err)=>{console.log(err)})



}


  render() {
    console.log("currpass:"+this.props.pass);
    return (

        <Grid textAlign={'center'}  container >
        
        <Grid  item sm xs={12}/>
       
        <Grid item sm>
        <Typography  variant="h3" margin={'10px auto 10px auto'}>Login</Typography>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
        <TextField  label='Username' name='uname' value={this.state.uname} variant="outlined" margin='normal' onChange={this.handleChange} type='username' fullWidth />
        <TextField  label='Password' name='upass' value={this.state.upass} variant="outlined" margin='normal' onChange={this.handleChange} type='password' fullWidth/>
        <Button   variant='contained' color='primary'type='submit'>LOG IN</Button><p></p>
        {this.state.login && <Navigate to="/Dashboard"/>}
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





export default CFMLogin;