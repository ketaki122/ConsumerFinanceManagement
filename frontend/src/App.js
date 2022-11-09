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

function App() {
  const userName="Ram@123";

  const [password,setPassword]=useState("123456");
  const setPass=(newpass)=>{
    setPassword(newpass);
    console.log("new pass recieved,set in app.js :"+newpass+" ,"+password);

  }
  
  


  //const [login,setLogin]=useState(false);
  const [prod,setProd]=useState({});
  const modify=(data)=>{
    const str=JSON.stringify(data);
    console.log("OBJECT Recieved"+str);
    setProd(data);
  }
  const[login,setLogin]=useState(false);
  const setLoginStatus=(status)=>{
  setLogin(status);
  console.log("Status Recieved:"+login);
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
        <Route path="/userlogin" element={<CFMLogin setlogin={setLoginStatus} login={login}  user={userName} pass={password}/>} />
        <Route path="/register" element={<CFMRegistration/>} />
        <Route path="/AdminLogin" element={<CFMAdminLogin adminlogin={adminlogin} setAdminlogin={setAdminLoginStatus}/>} />
        <Route path="/AdminDashboard" element={<CFMAdminDashboard adminlogin={adminlogin} setAdminlogin={setAdminLoginStatus}/>} />
        <Route path="/ChangePassword" element={<CFMChangePassword oldPass={password} setPass={setPass} />} />
        <Route path="/DashBoard" element={<CFMDashboard login={login} setlogin={setLoginStatus} user={userName}/>} />
        <Route path="/ForgotPassword" element={<CFMForgotPassword />} />
        <Route path="/Productinfo" element={<CFMProductInfo  setlogin={setLoginStatus}  user={userName} prod={prod} />} />
        <Route path="/ProductList" element={<CFMProductList setlogin={setLoginStatus} user={userName} modify={modify}  />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;