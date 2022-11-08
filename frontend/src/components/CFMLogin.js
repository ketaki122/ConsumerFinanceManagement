import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

class CFMLogin extends Component {

  constructor(){
    super();
this.state={
    uname:'',
    upass:'',
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
  this.props.navigate('/DashBoard');
}
else if(data1.data==1){
  alert("Username does not exist")
}
else {
 alert("Wrong password")
}
})
.catch((err)=>{console.log(err)})


}


  render() {
    
    return (

        <Grid textAlign={'center'}  container >
        
        <Grid  item sm xs={12}/>
        <Grid item sm>
        <Typography  variant="h3" margin={'10px auto 10px auto'}>Login</Typography>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
        <TextField  label='Username' name='uname' value={this.state.username} variant="outlined" margin='normal' onChange={this.handleChange} type='username' fullWidth />
        <TextField  label='Password' name='upass' value={this.state.password} variant="outlined" margin='normal' onChange={this.handleChange} type='password' fullWidth/>
        <Button   variant='contained' color='primary'type='submit'>LOG IN</Button><p></p>
        
        </form><p><a href='ForgotPassword'>Forgot Password?</a></p>
        <p style={{marginLeft:'62%'}} >New User? <a href='/register'>Register here</a></p>
        </Grid>
        
        <Grid  item sm xs={12}/>    
        </Grid>        

        

    )
  }
}

export function Loginwithrouter(props){
  const navigate=useNavigate()
  return (<CFMLogin navigate={navigate}></CFMLogin>)
}



export default CFMLogin