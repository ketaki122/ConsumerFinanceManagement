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
import {Link} from 'react-router-dom' ;
import axios from 'axios';
import "../styles.css";

export class CFMProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:this.props.user,
      products:[
        
      ],
      selectedProduct:{}
    }
   
  
  this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount=()=>{
    this.getProducts();
    
    


  }
  getProducts=()=>{
    axios.get(`http://localhost:8080/api/products`).then((res)=>{
      this.setState({products:res.data});
    }).catch((err)=>{console.log(err);})
  }
   sendData=()=>{
    
    this.props.modify(this.state.selectedProduct);
   }
  handleClick=(index)=>{
    const p=this.state.products[index].prodid;
    //const str=JSON.stringify(p);
    //console.log("OBJECT SELECTED"+str);
    
    this.props.modify(p);
    

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

        {
          this.state.products.map((p,index)=>{
            return(
              
              
              <Card key={p.prodId} sx={{ display: 'flex' }}>
                
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 , pl:1}}
        image={p.prodimage}
        alt={p.prodName}
      />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography style={{marginBottom:"20px"}} component="div" variant="h5">
           {p.prodName}
          </Typography>
          <Typography style={{marginBottom:"30px"}} variant="subtitle1" color="text.secondary" component="div">
            {p.proddesc}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        
        <Button key={p.prodId} onClick={this.handleClick.bind(this,index)}   variant="contained" color="primary">
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