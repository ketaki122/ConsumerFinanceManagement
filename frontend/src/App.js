import './App.css';
import './styles.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import CFMLogin from "./components/CFMLogin";
import {Loginwithrouter} from "./components/CFMLogin";
import Homepage from "./components/homepage";
import React, { useState } from 'react'; 
import CFMRegistration from "./components/CFMRegistration";
import {Registerwithrouter} from "./components/CFMRegistration";
import CFMAdminDashboard from "./components/CFMAdminDashboard";
import CFMAdminLogin from "./components/CFMAdminLogin";
import CFMChangePassword from "./components/CFMChangePassword";
import CFMDashboard from "./components/CFMDashboard";
import CFMForgotPassword from "./components/CFMForgotPassword";
import CFMProductInfo from "./components/CFMProductInfo";
import CFMProductList from "./components/CFMProductList";
import axios from 'axios';
function App() {
  const [currUser,setCurrUser]=useState({userName:"", password:"",login:false});

  /*const setPass=(newpass)=>{
    setPassword(newpass);
    console.log("new pass recieved,set in app.js :"+newpass+" ,"+password);

  }*/
  






  //const [login,setLogin]=useState(false);
  const [prod,setProd]=useState(0);
  const modify=(data)=>{
   
    console.log("prod Recieved"+data);
    setProd(data);
  }
 
  const setLoginStatus=(status,uname,upass)=>{
 
    

    setCurrUser({userName:uname,password:upass,login:status});
    
    

 
  
 
  }

 
  

  const[adminlogin,setAdminLogin]=useState(false);
  const setAdminLoginStatus=(status)=>{
  setAdminLogin(status);
  console.log("Status Recieved:"+adminlogin);
  }


  return (
    <Router>
    <div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userlogin" element={<CFMLogin setlogin={setLoginStatus} login={currUser.login}  user={currUser.userName} pass={currUser.password}/>} />
        <Route path="/register" element={<Registerwithrouter/>} />
        <Route path="/AdminLogin" element={<CFMAdminLogin adminlogin={adminlogin} setAdminlogin={setAdminLoginStatus}/>} />
        <Route path="/AdminDashboard" element={<CFMAdminDashboard adminlogin={adminlogin} setAdminlogin={setAdminLoginStatus}/>} />
        <Route path="/ChangePassword" element={<CFMChangePassword oldPass={currUser.password}  />} />
        <Route path="/DashBoard" element={<CFMDashboard login={currUser.login} setlogin={setLoginStatus} user={currUser.userName}/>} />
        <Route path="/ForgotPassword" element={<CFMForgotPassword />} />
        <Route path="/Productinfo" element={<CFMProductInfo  setlogin={setLoginStatus}  user={currUser.userName} prod={prod} />} />
        <Route path="/ProductList" element={<CFMProductList setlogin={setLoginStatus} user={currUser.userName} modify={modify}  />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;