import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export class CFMRegistration extends Component {

  constructor(props){
    super(props);
this.state={
    name:'',
    dob:'',
    emailId:'',
    phoneNo:'',
    username:'',
    password:'',
    address:'',
    cardType:'',
    bank:'',
    savingAccountNo:'',
    ifscCode:'',
}
}  

handleChange=(e)=>{
  this.setState({
      [e.target.name]:e.target.value
  })
}
handleRadioChange(e) {
  console.log(e.target.value+" "+e.target.name);
  this.setState({
    [e.target.name]:e.target.value
})
console.log(this.state)
}

handleSubmit=(e)=>{
     
  e.preventDefault();
const userdata={
    name:this.state.name,
    dob:this.state.dob,
    emailId:this.state.emailId,
    phoneNo:this.state.phoneNo,
    username:this.state.username,
    password:this.state.password,
    address:this.state.address,
    cardType:this.state.cardType,
    bank:this.state.bank,
    savingAccountNo:this.state.savingAccountNo,
    ifscCode:this.state.ifscCode
}
console.log(userdata)


}


  render() {
    return (
        
        
        <Grid   container >
        
        <Grid  item sm/>
         <Grid item sm>
         <Typography textAlign={'center'} variant="h4" margin={'10px auto 10px auto'}>Registration Form</Typography>
         <form onSubmit={this.handleSubmit} autoComplete='off'>
         <TextField label='Name' variant="outlined" margin='normal' onChange={this.handleChange} name='name' type='name'fullWidth/>
         <p>Date of Birth
         <TextField  variant="outlined"onChange={this.handleChange} name='dob' type='date'fullWidth/></p>
         <TextField label='Email id' variant="outlined"onChange={this.handleChange} margin='normal' name='emailId' type='emailId'fullWidth/>
         
         
         <TextField label='Phone no.' variant="outlined"onChange={this.handleChange} margin='normal' name='phoneNo' type='phonenumber'fullWidth/>
         <TextField label='User Name' variant="outlined"onChange={this.handleChange} margin='normal' name='username' type='username'fullWidth/>
         <TextField label='Password' variant="outlined"onChange={this.handleChange} margin='normal' name='password' type='password'fullWidth/>
         <TextField label='Confirm Password' variant="outlined" onChange={this.handleChange} margin='normal' name='cfpassword' type='password'fullWidth/>
         <TextField label='Address' variant="outlined"onChange={this.handleChange} margin='normal' name='address' type='address'fullWidth/>
         <p></p>
         <FormControl>
      <FormLabel id="">Card Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="cardType"
        defaultValue="top"
        onChange={this.handleRadioChange.bind(this)}
      >
        <FormControlLabel value="Gold" control={<Radio />} label="Gold" />
        <FormControlLabel value="Titanium" control={<Radio />} label="Titanium" />

      </RadioGroup>
    </FormControl>
         <TextField label='Select Bank' variant="outlined" onChange={this.handleChange} margin='normal'name='bank' type='bank'fullWidth/>
         <TextField label='Saving Account No:' variant="outlined" onChange={this.handleChange} margin='normal' name='ifscCode' type='savingAccountNo'fullWidth/>
         <TextField label='IFSC code' variant="outlined"type='ifscCode' onChange={this.handleChange} fullWidth/><p></p>
         <Button  variant='contained' color='primary' style={{marginLeft:"30%"}} type='submit'  >Submit</Button>
         
         <Button  textAlign={'right'} variant='contained' color='primary'style={{marginLeft:"10%"}} margin='normal  'type='reset'>Reset</Button>
         </form><p></p><p></p>
         <p style={{marginLeft:'28%'}} >Already a member? <a href='/userlogin'>Login Here</a> </p>
         
         </Grid>
        <Grid  item sm/>  
        </Grid>        

        
    )
  }
}

export default CFMRegistration