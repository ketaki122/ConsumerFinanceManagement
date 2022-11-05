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
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom' 
import "../styles.css";
import ProductInfo from './CFMProductInfo';
export class CFMProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:this.props.user,
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
    //this.handlethisProduct=this.handlethisProduct.bind(this);
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
                <ArrowBackIcon style={{ padding: "10px" }} />

                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="nav nav-link"
                  to="/Dashboard"
                >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GO BACK{" "}
                  </Typography>
                </Link>
              </IconButton>
              <Typography sx={{ ml: 2, flexGrow: 1 }}>
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

        {
          this.state.products.map((p)=>{
            return(
              
              
              <Card key={p.productId} sx={{ display: 'flex' }}>
                
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 , pl:1}}
        image={p.productImageUrl}
        alt={p.productName}
      />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography style={{marginBottom:"20px"}} component="div" variant="h5">
           {p.productName}
          </Typography>
          <Typography style={{marginBottom:"30px"}} variant="subtitle1" color="text.secondary" component="div">
            {p.productDetails}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        
        <Button key={p.productId}   variant="contained" color="primary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="nav nav-link"
                  to="/ProductInfo"
                >
                 BUY PRODUCT
                </Link>
              </Button>
        
        </Box>
        </CardContent>
    
      </Box>
      
    </Card>

            )
          })
        }


      </div>
      </div>
    )
  }
}

export default CFMProductList;