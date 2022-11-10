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
import axios from 'axios';
import { Link,Navigate, useNavigate} from "react-router-dom";

export class CFMRegistration extends Component {

  constructor(props){
    super(props);
this.state={
    uname:'',  
    email:'',
    phone:'',
    upass:'',
    address:'',
    cardtype:'',
    bankname:'',
    acc_no:'',
    ifsc_code:'',
    status:'',
 
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
createCard=(id,card_type)=>{
  const min_ = 100000000;
  const max_ = 999999999;
  const rand = min_ + Math.random() * (max_ - min_);
  const newCard={
    regid:id,
    cardno:rand,
    cardtype:card_type,
    initialbal:card_type=="Gold"?50000:80000,
    availbal:card_type=="Gold"?50000:80000



    
  }
  axios.post(`http://localhost:8080/UserDetailsRest/api/cardDetails`, newCard ).then((data)=>{
    console.log("CARD CREATED: "+ data);
  }).catch((err)=>{console.log(err);});

  



}
handleSubmit=(e)=>{
  //const navigate = useNavigate();
  e.preventDefault();
const userdata={
    uname:this.state.uname,
    email:this.state.email,
    phone:this.state.phone,
    upass:this.state.upass,
    address:this.state.address,
    cardtype:this.state.cardtype,
    bankname:this.state.bankname,
    acc_no:this.state.acc_no,
    ifsc_code:this.state.ifsc_code,
    status:'customer'
}
console.log(userdata);

axios.post('http://localhost:8080/userRest/api/user',userdata)
.then((data1)=>{
  console.log("Hi");
console.log(data1);
this.createCard(data1.data.regid,data1.data.cardtype);
alert("User registered successfuly");
this.props.navigate("/userlogin");

})
.catch((err)=>{
  console.log(err)
})

}


  render() {
    return (
        
        
        <Grid   container >
        
        <Grid  item sm/>
         <Grid item sm>
         <Typography textAlign={'center'} variant="h4" margin={'10px auto 10px auto'}>Registration Form</Typography>
         <form onSubmit={this.handleSubmit} autoComplete='off'>
         <TextField label='User Name' variant="outlined" margin='normal' onChange={this.handleChange} name='uname' type='name'fullWidth/>
       
         <TextField label='Email id' variant="outlined"onChange={this.handleChange} margin='normal' name='email' type='emailId'fullWidth/>
         
         
         <TextField label='Phone no.' variant="outlined"onChange={this.handleChange} margin='normal' name='phone' type='phonenumber'fullWidth/>
        
         <TextField label='Password' variant="outlined"onChange={this.handleChange} margin='normal' name='upass' type='password'fullWidth/>
         <TextField label='Confirm Password' variant="outlined" onChange={this.handleChange} margin='normal' name='cfpassword' type='password'fullWidth/>
         <TextField label='Address' variant="outlined"onChange={this.handleChange} margin='normal' name='address' type='address'fullWidth/>
         <p></p>
         <FormControl>
      <FormLabel id="">Card Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="cardtype"
        defaultValue="top"
        onChange={this.handleRadioChange.bind(this)}
      >
        <FormControlLabel value="Gold" control={<Radio />} label="Gold" />
        <FormControlLabel value="Titanium" control={<Radio />} label="Titanium" />

      </RadioGroup>
    </FormControl>
         <TextField label='Select Bank' variant="outlined" onChange={this.handleChange} margin='normal'name='bankname' type='bank'fullWidth/>
         <TextField label='Saving Account No:' variant="outlined" onChange={this.handleChange} margin='normal' name='acc_no' type='savingAccountNo'fullWidth/>
         <TextField label='IFSC code' name="ifsc_code"variant="outlined"type='ifsc_code' onChange={this.handleChange} fullWidth/><p></p>
         <Button  variant='contained' color='primary' style={{marginLeft:"30%"}} type='submit'  >REGISTER</Button>
         
         <Button  textAlign={'right'} variant='contained' color='primary'style={{marginLeft:"10%"}} margin='normal  'type='reset'>RESET</Button>
         </form><p></p><p></p>
         <p style={{marginLeft:'28%'}} >Already a member? <a href='/userlogin'>Login Here</a> </p>
         
         </Grid>
        <Grid  item sm/>  
        </Grid>        

        
    )
  }
}

export function Registerwithrouter(props){
  const navigate=useNavigate()
  return (<CFMRegistration navigate={navigate}></CFMRegistration>)
}

export default CFMRegistration