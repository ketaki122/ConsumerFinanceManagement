import { Component } from 'react';
import * as React from "react";
import Moment from "moment";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from "@mui/material/Grid";
import "../styles.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom' 
import axios from 'axios';
import Modal from '@mui/material/Modal';
export class CFMProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      userName:this.props.user,
      userInfo:{},
      cardInfo:{},
      productInfo:{
        prodid:'',
       price:'',
        proddesc:'',
        prodname:'',
        prodimage:'',
        emi_3m:'',
        emi_6m:'',
        emi_9m:''


      },
      emiPeriod:"",
      emival:0,
      modalController:false,

    }
    this.handleChange=this.handleChange.bind(this);
    this.handleOpen=this.handleOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handlePurchase=this.handlePurchase.bind(this);
 
  }
  componentDidMount=()=>{
    this.fetchProduct();
    this.fetchUser();
    
  }
  fetchCard=(id)=>{
    axios.get(`http://localhost:8080/UserDetailsRest/api/cardDetails/${id}`).then((res)=>{
  console.log("CARD RESPONSE"+JSON.stringify(res.data));
  this.setState({cardInfo:res.data});
}).catch((err)=>{console.log(err)});

  }
  fetchUser=()=>{
    axios.get(`http://localhost:8080/userRest/api/userfind/${this.state.userName}`).then((res)=>{
      console.log("RESPONSE"+JSON.stringify(res.data));

      this.setState({userInfo:res.data});
      this.fetchCard(res.data.regid);
    }).catch((err)=>{console.log(err)});
  }
  
  fetchProduct=()=>{
    
    axios.get(`http://localhost:8080/api/products/${this.props.prod}`).then((res)=>{
      console.log(res.data);
      this.setState({productInfo:{...this.state.productInfo, 
        prodid:res.data.prodid,
        price:res.data.price,
        proddesc:res.data.proddesc,
        prodname:res.data.prodname,
        prodimage:res.data.prodimage,
        emi_3m:res.data.emi_3m,
        emi_6m:res.data.emi_6m,
        emi_9m:res.data.emi_9m
      }});
     

    }).catch((err)=>{console.log(err)})
  }

  handleChange=(e)=>{
    this.setState({emiPeriod:e.target.value});
  
   
  }
  handleOpen=()=>{
    this.setState({modalController:true});
  }
  handleClose=()=>{
    this.setState({modalController:false});
  }
  handlePurchase=()=>{

    const num=Math.floor(this.state.productInfo.price);
    const emi=Math.floor(this.state.emiPeriod);
    const result=num/emi;
    this.setState({emival:result,modalController:false});
   
    const bal=this.state.cardInfo.availbal-this.state.emival;
    const prod={
      regid:this.state.userInfo.regid,
      prodid:this.state.productInfo.prodid,
      prodname:this.state.productInfo.prodname,
      amountpaid:this.state.emival,
      emi:this.state.emiPeriod,
      ammount_bal:bal,
      price:this.state.productInfo.price,
      date:Moment(new Date()).format("dd-MM-yyyy")
    }
    axios.post(`http://localhost:8080/producthistory/api/ph`,prod).then((res)=>{console.log(res);
  }).catch((err)=>{console.log(err);})

  }
  render() {
    
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    return (
      <div>
         <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: "70%", flexGrow: 0 }}
              >
                <ArrowBackIcon  />

                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="nav nav-link"
                  to="/ProductList"
                >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GO BACK{" "}
                  </Typography>
                </Link>
              </IconButton>
              <Typography sx={{ ml: 2,  flexGrow: 1 }}>
                Hi , {this.state.userName}
              </Typography>
              <Button onClick={()=>{this.props.setlogin(false)}}  variant="outlined" color="inherit">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="nav nav-link"
                  to="/userlogin"
                >
                  LOGOUT
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <div>
          <br/>
          <Grid container>
            <Grid  item xs={5}>
              <img style={{width:"90%"}} src={this.state.productInfo.prodimage} alt={this.state.productInfo.prodname}/>
            </Grid>
            <Grid item xs={7}>
              <Grid container>
              
                <Grid item xs={3}>  <br/>
                <br/><p className="attribute-transactions">PRODUCT NAME :</p></Grid>
                <Grid item xs={9}>  <br/>
                <br/><Typography style={{marginBottom:"20px"}} component="div" variant="h5">
           {this.state.productInfo.prodname}
          </Typography></Grid>
              </Grid>
              <Grid container>
              
              <Grid item xs={6}> 
              <p className="attribute-transactions">PRODUCT DETAILS :</p>
              <Typography style={{marginBottom:"30px"}} variant="subtitle1" color="text.secondary" component="div">
            {this.state.productInfo.proddesc}
          </Typography>
            </Grid>
              
            </Grid>
            <Grid container>
              
              <Grid item xs={1}>  
             <p >COST:</p></Grid>
              <Grid item xs={6}>  
              <h4  className="balance">INR {this.state.productInfo.price}</h4></Grid>
            </Grid>
            <Grid container>
              
              <Grid item xs={6}>  <br/>
              <p style={{textAlign:"center"}} className="credit-used">EMI PERIOD</p>
              <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel  id="demo-simple-select-label">Select Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.productInfo.emiPeriod}
          label="EMI"
          onChange={(e)=>this.handleChange(e)}
        >
          <MenuItem value={"3"}>3 months</MenuItem>
          <MenuItem value={"6"}>6 months</MenuItem>
          <MenuItem value={"9"}>9 months</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
    <em style={{color:"grey"}}>
              EMI starting 6000/month
             </em>
             <br/>
             <br/>
             <Button onClick={()=>this.handleOpen()} variant="contained" color="primary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="nav nav-link"
                
                >
                 PAY NOW
                </Link>
              </Button>
              <Modal
                      
                      open={this.state.modalController}
                
                      onClose={()=>this.handleClose()}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                         ACTIVATE USER
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <FormControl >

                        CONFIRM PURCHASE
                        <Button onClick={()=>this.handlePurchase()} variant='contained' color='primary'type='submit'>YES</Button>
                      </FormControl>
                                          
                        </Typography>
                      </Box>
                    </Modal>
              <br/>
             <br/>
             <Link style={{textDecoration: "underline" }} className="nav nav-link"><p>Terms and Conditions</p></Link>
              
             </Grid>
             
            </Grid>
            
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default CFMProductInfo