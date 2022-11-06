import { Component } from 'react';
import * as React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import "../styles.css";

import {Link} from 'react-router-dom' 

const styles={
  root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft:1,
      flex: 1,
    },
    divider: {
      height: 28,
      margin: 4,
    },
}

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[
        { 
          productId:1,
          productName: "Puma Jacket",
          productCost: 3000,
          productImageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/536969/01/fv/fnd/IND/fmt/png",
          productType: "Clothing",
          productDetails:"Made from 100% high quality leather to keep you warm durig winters. Suitable for Machine Wash."
          
        },
        { productId:2,
          productName: "Samsung TV",
          productCost: 30000,
          productImageUrl:"https://5.imimg.com/data5/FG/TR/MU/SELLER-56122824/samsung-32-smart-tv-500x500.jpg",
          productType: "Electronics",
          productDetails:"Ultra HD 4k picture Quality with Bass Sound and vibrant colors. 32 inch LED Display , Bluetooth connectivity, Smart TV."
          
        },
        { productId:3,
          productName: "Redmi Note 5",
          productCost: 7000,
          productType: "Electronics",
          productImageUrl:"https://i01.appmifile.com/webfile/globalimg/Iris/E7S-black.png",
          productDetails:"Sleek model with 13inch Display and 64MP camera, 5MP front camera with flash. 64GB Storage and Made in India"
          
        },

      ]
    }
  }
  render() {
   let p=this.state.products[1];

    return (
    
    <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='primary'>
           <Toolbar>
          
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
             </Typography>
             <Button color="inherit" component={Link} to='/register'>Register</Button>
             <Button color="inherit" component={Link} to='/userlogin'>Login</Button>
           </Toolbar>
         </AppBar>
        </Box>
        <div>
          <br/>
          <Grid container>
            <Grid  item xs={5}>
              <img style={{marginLeft:'5%', width:"80%"}} src={p.productImageUrl} alt={p.productName}/>
              <br/>
              <p style={{textAlign:'center'}}><a href='/'>ELIGIBILITY</a></p><br/>
              <p style={{textAlign:'center'}}><a href='/'>Charges for registration and EMI card details</a></p>
            </Grid>
            <Grid item xs={7}>
              <Grid container>
              
                <Grid item xs={4}>  <br/>
                <br/><p className="attribute-transactions">PRODUCT NAME: <b>{p.productName}</b></p> </Grid>
               
              </Grid>
              <Grid container>
              
              <Grid item xs={6}> 
              <p className="attribute-transactions">PRODUCT DETAILS :</p>
              <Typography style={{marginLeft:'0.7em', marginBottom:"30px"}} variant="subtitle1" color="text.secondary" component="div">
            {p.productDetails}
          </Typography>
            </Grid>
              
            </Grid>
            <Grid container>
              
              <Grid item xs={1}>  
             <p style={{marginLeft:'20%'}}>COST:</p></Grid>
              <Grid item xs={6}>  
              <h4  className="balance">INR {p.productCost}</h4></Grid>
            </Grid>
            <Grid container>
              
              <Grid item xs={6}>  <br/>
              <Button style={{marginLeft:'20%'}}variant='contained'>Buy Now</Button>
              <Box sx={{ minWidth: 120 }}>
   
    </Box>
  
             
              <br/>
             <br/><br/>
             <br/><br/>
             
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

export default Homepage