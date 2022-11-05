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

export class CFMProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      userName:this.props.user,
      productInfo:{
        productId:this.props.prod.productId,
        productType:this.props.prod.productType,
        productCost:this.props.prod.productCost,
        productDetails:this.props.prod.productDetails,
        productName:this.props.prod.productName,
        productImageUrl:this.props.prod.productImageUrl,
        emiPeriod:"",


      }

    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange=(e)=>{
    const chosen=e.target.value;
 this.setState({productInfo:{...this.state.productInfo, emiPeriod:chosen}});
  }
  render() {
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
              <Button  variant="outlined" color="inherit">
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
              <img style={{width:"90%"}} src={this.state.productInfo.productImageUrl} alt={this.state.productInfo.productName}/>
            </Grid>
            <Grid item xs={7}>
              <Grid container>
              
                <Grid item xs={3}>  <br/>
                <br/><p className="attribute-transactions">PRODUCT NAME :</p></Grid>
                <Grid item xs={9}>  <br/>
                <br/><Typography style={{marginBottom:"20px"}} component="div" variant="h5">
           {this.state.productInfo.productName}
          </Typography></Grid>
              </Grid>
              <Grid container>
              
              <Grid item xs={6}> 
              <p className="attribute-transactions">PRODUCT DETAILS :</p>
              <Typography style={{marginBottom:"30px"}} variant="subtitle1" color="text.secondary" component="div">
            {this.state.productInfo.productDetails}
          </Typography>
            </Grid>
              
            </Grid>
            <Grid container>
              
              <Grid item xs={1}>  
             <p >COST:</p></Grid>
              <Grid item xs={6}>  
              <h4  className="balance">INR {this.state.productInfo.productCost}</h4></Grid>
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
             <Button variant="contained" color="primary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="nav nav-link"
                
                >
                 PAY NOW
                </Link>
              </Button>
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