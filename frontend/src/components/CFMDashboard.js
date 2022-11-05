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
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export class CFMDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Ram@123",
      cardDetails: {
        cardNumber: "45678912901",
        cardHolder: "Ram Kumar",
        validity: Moment().format("MM/YY"),
        cardType: "Gold",
        status: "Activated",
        totalCredit: 40000,
        creditUsed: 10000,
        balance: 30000,
      },
      productsPurchased: [
        { productId:1,
          productName: "Puma Jacket",
          productCost: 3000,
          productType: "clothing",
          datePurchased: Moment("02-11-2022").format("DD-MM-YY"),
        },
        {productId:3,
          productName: "Redmi Note 5",
          productCost: 7000,
          productType: "electronics",
          datePurchased: Moment("09-18-2022").format("DD-MM-YY"),
        },
      ],
      recentTransactions: [
        {
          transactionId: "2201ABC",
          transactionDate: Moment("02-11-2022").format("DD-MM-YY"),
          amountPaid: 3000,
          product: "Puma Jacket",
        },
        {
          transactionId: "2301XYZ",
          transactionDate: Moment("09-18-2022").format("DD-MM-YY"),
          amountPaid: 7000,
          product: "Redmi Note 5",
        },
      ],
    };
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
                <LocalMallIcon style={{ padding: "10px" }} />

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
              <Button variant="outlined" color="inherit">
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
        <div className="container">
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
                    {this.state.cardDetails.cardNumber}
                    <br />
                  </p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Name :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.cardDetails.cardHolder}
                    <br />
                  </p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Valid till :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.cardDetails.validity}
                    <br />
                  </p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Card Type :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.cardDetails.cardType}
                    <br />
                  </p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  style={{ background: "green", textAlign: "center" }}
                  item
                  xs={12}
                >
                  <p className="card-status">
                    {this.state.cardDetails.status.toUpperCase()}
                  </p>
                </Grid>
              </Grid>
            </Item>
          </div>
          <br />
          <div>
            <Grid container className="acc-info">
              <Grid item xs={12} sm={12} md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p className="attribute-info">TOTAL CREDIT :</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="credit">
                      INR {this.state.cardDetails.totalCredit}
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
                      INR {this.state.cardDetails.creditUsed}
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
                      INR {this.state.cardDetails.balance}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="products-title">
            <p>PRODUCTS PURCHASED</p>
          </div>
          <br />

          <div className="products-purchased">
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
                                {x.productName}
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item xs={4}>
                              <p className="attribute-transactions">
                                AMOUNT PAID :
                              </p>
                            </Grid>
                            <Grid item xs={4}>
                              <p
                                style={{ color: "lightcoral" }}
                                className="value-transactions"
                              >
                                INR {x.productCost}
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

          <div className="products-title">
            <p>RECENT TRANSACTIONS</p>
          </div>
          <div className="transactions">
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>PRODUCT</StyledTableCell>
                    <StyledTableCell align="right">DATE</StyledTableCell>
                    <StyledTableCell align="right">AMOUNT PAID</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.recentTransactions.map((row) => (
                    <StyledTableRow key={row.transactionId}>
                      <StyledTableCell component="th" scope="row">
                        {row.product}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.transactionDate}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.amountPaid}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default CFMDashboard;
