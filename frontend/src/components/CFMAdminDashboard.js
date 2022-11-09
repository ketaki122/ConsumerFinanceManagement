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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export class CFMAdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Admin@123",
      logout:this.props.adminlogin,
      usersRegistered:[
        { regId:1,
          userName:"Ram@123",
          name:"Ram Kumar",
          acc_no:"37767085324",
          ifsc:"SBIN0056789",
          cardType:"Gold",
          status:true,
          modalController:false,
          activatedRes:{yes:true,no:false}
          
        },
        { regId:2,
          userName:"Lina@456",
          name:"Lina D'souza",
          acc_no:"47767085324",
          ifsc:"SBIN0051119",
          cardType:"Silver",
          status:false,
          modalController:false,
          activatedRes:{yes:false,no:true}
        }
      ]
    }
  this.handleLogout=this.handleLogout.bind(this);
  this.handleOpen=this.handleOpen.bind(this);
  this.handleClose=this.handleClose.bind(this);
  this.handlethisChange=this.handlethisChange.bind(this);
  this.handleActivation=this.handleActivation.bind(this);
  this.handleDelete=this.handleDelete.bind(this);
}
handleLogout=(idx)=>{
  this.props.setAdminlogin(false);
  console.log("executed");
  this.setState({logout:this.props.login});
}
handleOpen=(idx)=>{
 const newArr=[];
 this.state.usersRegistered.map((obj)=>{
  if(this.state.usersRegistered.indexOf(obj)==idx){
    obj.modalController=true;
  
  }
  newArr.push(obj);
  
 
 });
 this.setState({usersRegistered:newArr});
}
handleClose=(pos)=>{
  const newArr=[];
   this.state.usersRegistered.map((obj)=>{
    if(this.state.usersRegistered.indexOf(obj)==pos){
      obj.modalController=false;
     
    }
    newArr.push(obj);
  });
    this.setState({usersRegistered:newArr});
}
handlethisChange=(e,i)=>{
  const newArr=[];
  this.state.usersRegistered.map((obj)=>{
   if(this.state.usersRegistered.indexOf(obj)==i){
     if(e.target.value=="yes"){
      obj.activatedRes.yes=true;
      obj.activatedRes.no=false;
     }
     else if(e.target.value=="no"){
      obj.activatedRes.yes=false;
      obj.activatedRes.no=true;
     }
    
   }
   newArr.push(obj);
 });
   this.setState({usersRegistered:newArr});

}
handleActivation=(p)=>{
  const newArr=[];
   this.state.usersRegistered.map((obj)=>{
    if(this.state.usersRegistered.indexOf(obj)==p){
      if(obj.activatedRes.yes==true && obj.activatedRes.no==false){
        obj.status=true;
      }
      else{
        obj.status=false;
      }
      obj.modalController=false;
     
    }
    newArr.push(obj);
  });
    this.setState({usersRegistered:newArr});


}
handleDelete=(key)=>{

const newArr=this.state.usersRegistered.filter((x)=>{return this.state.usersRegistered.indexOf(x)!=key;})
this.setState({usersRegistered:newArr});
}
  render() {
    const str=JSON.stringify(this.state.usersRegistered);
    console.log("USERS:"+str);
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
      <div><Box sx={{ flexGrow: 1 }}>
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
      <Navigate to="/AdminLogin" replace={true} />
    )}
          </form>
          
        
        </Toolbar>
      </AppBar>
    </Box>
    <div className="transactions">
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>NAME</StyledTableCell>
                    <StyledTableCell align="right">UNAME</StyledTableCell>
                    <StyledTableCell align="right">ACCOUNT NO.</StyledTableCell>
                    <StyledTableCell clign="right">IFSC  CODE     </StyledTableCell>
                    <StyledTableCell align="right">CARD TYPE</StyledTableCell>
                    <StyledTableCell align="right">STATUS</StyledTableCell>
                    <StyledTableCell align="right">EDIT STATUS</StyledTableCell>
                    <StyledTableCell align="right">DELETE</StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.usersRegistered.map((row,index) => (
                    <StyledTableRow key={row.regId}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.userName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.acc_no}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ifsc}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.cardType}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <p style={{color:`${row.status?"green":"crimson"}`}}>{row.status?"Approved":"Pending"}</p>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                      <IconButton onClick={()=>this.handleOpen(index)}  key={index} aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <Modal
                      key={index}
                      open={row.modalController}
                
                      onClose={()=>this.handleClose(index)}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                         ACTIVATE USER
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <FormControl >

                        <RadioGroup
                          key={index}
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={(e)=>this.handlethisChange(e,index)}
                        >
                          <FormControlLabel value="yes"checked={row.activatedRes.yes} control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" checked={row.activatedRes.no} control={<Radio />} label="No" />
                          
                         
                        </RadioGroup>
                        <Button onClick={()=>this.handleActivation(index)} variant='contained' color='primary'type='submit'>SUBMIT</Button>
                      </FormControl>
                                          
                        </Typography>
                      </Box>
                    </Modal>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                      <IconButton onClick={()=>this.handleDelete(index)} key={row.regId+"d"} aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
    </div>
    )
  }
}

export default CFMAdminDashboard