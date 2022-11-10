import * as React from "react";
import { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Moment from "moment";
import "../styles.css";
import { Link,Navigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from 'axios';

export class CFMDashboard extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      userName: this.props.user,
      logout:this.props.login,
      details:{
        uname:'',  
        email:'',
        phone:'',
        upass:'',
        address:'',
        cardtype:'',
        bankname:'',
        acc_no:'',
        ifsc_code:'',
        isVerified:true},
      
      cardDetails: {
        
    cardno:'',
    cardtype:'',
    initialbal:'',
    availbal:'',
    validity:''
      },
      productsPurchased: [
      
      ],
      recentTransactions: [
       
      ],
    };
    this.handleLogout=this.handleLogout.bind(this);
  }
  componentDidMount=()=>{
    this.getUser();
    
    


  }
  getProducts=(id)=>{
    axios.get(`http://localhost:8080/producthistory/api/ph`).then((res)=>{console.log(res);
    const newArr=[];
    res.data.map((x)=>{
      if(x.regid==this.state.details.regid){
        newArr.push(x);
      }
    });

    
   

    this.setState({productsPurchased:newArr,recentTransactions:newArr});
  }).catch((err)=>{console.log(err);})

  }
  getUser=()=>{
    axios.get(`http://localhost:8080/userRest/api/userfind/${this.state.userName}`).then((res)=>{
      console.log("RESPONSE"+JSON.stringify(res.data));
      this.setState({details:{
        uname:res.data.uname,  
        email:res.data.email,
        phone:res.data.phone,
        upass:res.data.upass,
        address:res.data.address,
        cardtype:res.data.cardtype,
        bankname:res.data.bankname,
        acc_no:res.data.acc_no,
        ifsc_code:res.data.ifsc_code,
        isVerified:res.data.isVerified=="true"?true:false,
      regid:res.data.regid}

      });
      this.getCard(res.data.regid);
      this.getProducts(res.data.regid);
  
    }).catch((err)=>{
      console.log(err)
    })

  }
 getCard=(id)=>{
axios.get(`http://localhost:8080/UserDetailsRest/api/cardDetails/${id}`).then((res)=>{
  console.log("CARD RESPONSE"+JSON.stringify(res.data));
  this.setState({cardDetails:{
    regid:res.data.regid,
    cardno:res.data.cardno,
    cardtype:res.data.cardtype,
    initialbal:res.data.initialbal,
    availbal:res.data.availbal,
    validity:Moment(res.data.validity).format("MM/YY")
   }

  });

}).catch((err)=>{console.log(err)});
 }
  handleLogout=()=>{
    this.props.setlogin(false);
    console.log("executed");
    this.setState({logout:this.props.login});
  }

  render() {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }));
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      "&:last-child td, &:last-child th": {
        border: 0,
      },
    }));
    console.log("CURRUSER"+JSON.stringify(this.state.details));
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
                <LocalMallIcon  />

                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="nav nav-link"
                  to="/ProductList"
                >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Products{" "}
                  </Typography>
                </Link>
              </IconButton>
              <Typography sx={{ ml: 2, flexGrow: 1 }}>
                Hi , {this.state.userName}
              </Typography>
              <form onSubmit={()=>this.handleLogout()}>
              <Button type="submit"  variant="outlined" color="inherit">
               LOGOUT
              </Button>
              {!this.state.logout && (
          <Navigate to="/userlogin" replace={true} />
        )}
              </form>
              
            
            </Toolbar>
          </AppBar>
        </Box>
        <div >
          <div className="mycard">
            <Item key={1} elevation={12}>
              <Grid container>
                <Grid item xs={12}>
                  <p className="Lfi">LFI</p>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Card Number :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.cardDetails.cardno}
                   
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Name :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.details.uname}
                 
                  </p>
                </Grid>
              </Grid>
              <br /><div style={{display:`${this.state.details.isVerified?"block":"none"}`}}>
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Valid till :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.cardDetails.validity}
               
                  </p>
                </Grid>
              </Grid>

              </div>
              
              <br />
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Card Type :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.cardDetails.cardtype}
                  
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid
                  style={{backgroundColor:`${this.state.details.isVerified?"lightgreen":"lightcoral"}`,textAlign:"center"}}
                  item
                  xs={12}
                >
                  <p className="card-status">
                    {this.state.details.isVerified?"ACTIVATED":"NOT ACTIVATED"}
                  </p>
                </Grid>
              </Grid>
            </Item>
          </div>
          <br />
          <div style={{display:`${this.state.details.isVerified?"none":"block"}`, textAlign:"center", marginLeft:"auto",arginRight:"auto", width:"100%"}}>
            <h4>Please wait for admin to approve you...</h4>
          </div>
          <div style={{display:`${this.state.details.isVerified?"block":"none"}`}}>
            <Grid container className="acc-info">
              <Grid item xs={12} sm={12} md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p className="attribute-info">TOTAL CREDIT :</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="credit">
                      INR {this.state.cardDetails.initialbal}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p className="attribute-info">CREDIT USED :</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="credit-used">
                      INR {this.state.cardDetails.initialbal-this.state.cardDetails.availbal}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p className="attribute-info">BALANCE :</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="balance">
                      INR {this.state.cardDetails.availbal}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div style={{display:`${this.state.details.isVerified?"block":"none"}`}} className="products-title">
            <p>PRODUCTS PURCHASED</p>
          </div>
          <br />

          <div style={{display:`${this.state.details.isVerified?"block":"none"}`}} className="products-purchased">
            {this.state.productsPurchased.map((x) => {
              return (
                <Grid className="product" container>
                  <Grid item xs={12}>
                    <Item
                      key={this.state.productsPurchased.indexOf(x)}
                      elevation={12}
                    >
                      <Grid container>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item xs={4}>
                              <p className="attribute-transactions">
                                PRODUCT NAME :
                              </p>
                            </Grid>
                            <Grid item xs={4}>
                              <p className="value-transactions">
                                {x.prodname}
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item xs={4}>
                              <p className="attribute-transactions">
                                PRICE
                              </p>
                            </Grid>
                            <Grid item xs={4}>
                              <p
                                style={{ color: "lightcoral" }}
                                className="value-transactions"
                              >
                                INR {x.price}
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Item>
                  </Grid>
                </Grid>
              );
            })}

            <br />
          </div>
          <div style={{display:`${this.state.details.isVerified?"block":"none"}`}}>

          <div  className="products-title">
            <p>RECENT TRANSACTIONS</p>
          </div>
          <div className="transactions">
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>PRODUCT</StyledTableCell>
                    <StyledTableCell align="right">EMI PERIOD</StyledTableCell>
                    <StyledTableCell align="right">AMOUNT PAID</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.recentTransactions.map((row) => (
                    <StyledTableRow key={row.transactionId}>
                      <StyledTableCell component="th" scope="row">
                        {row.prodname}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.emi}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.price/Math.floor(row.emi)}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          </div>
         
        </div>
      </div>
    );
  }
}

export default CFMDashboard;
