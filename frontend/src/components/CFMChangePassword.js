
import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link ,Navigate} from "react-router-dom";

export class CFMChangePassword extends Component {
  constructor(props){
    super(props);
    this.state={
      newpass:"",
      confirmpass:""

    }
    

  }
  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  handleSave=(e)=>{
    e.preventDefault();
    if(this.state.newpass==this.props.oldPass){
      alert("New Password cannot be same as old Password");


    }
    else if(this.state.newpass==this.state.confirmpass){
      this.props.setPass(this.state.newpass);
      alert("Password Changed successflly");
    }
    else {
      alert("New Password doesn't match confirmed password!")

    }

  }

  render() {
    return (
      <div style={{marginLeft:"-150px",marginRight:"0px", width:"80%"}}> <Grid textAlign={'center'}  container >
        
      <Grid  item sm xs={12}/>
     
      <Grid item sm>
      <Typography  variant="h3" margin={'10px auto 10px auto'}>Change Password</Typography>
      <form onSubmit={this.handleSave} autoComplete='off'>
      <TextField onChange={this.handleChange} value={this.state.newpass}  label='New Password' name='newpass'  variant="outlined" margin='normal' type='password' fullWidth />
      <TextField  onChange={this.handleChange} value={this.state.confirmpass}   label='Confirm new Password' name='confirmpass'  variant="outlined" margin='normal'  type='password' fullWidth/>
      <Button   variant='contained' color='primary'type='submit'>SAVE</Button><p></p>
  
      </form><p><a href='/userlogin'>Back to Login</a></p>
    
      </Grid>
      
    
   
      </Grid>  </div>
    )
  }
}

export default CFMChangePassword