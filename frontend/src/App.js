import './App.css';
import './styles.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import CFMLogin from "./components/CFMLogin";
import Homepage from "./components/homepage";
import React, { useState } from 'react'; 
import CFMRegistration from "./components/CFMRegistration";
import CFMAdminDashboard from "./components/CFMAdminDashboard";
import CFMAdminLogin from "./components/CFMAdminLogin";
import CFMChangePassword from "./components/CFMChangePassword";
import CFMDashboard from "./components/CFMDashboard";
import CFMForgotPassword from "./components/CFMForgotPassword";
import CFMProductInfo from "./components/CFMProductInfo";
import CFMProductList from "./components/CFMProductList";

function App() {
  const userName="Ram@123";
  const [prod,setProd]=useState({});
  const modify=(data)=>{
    const str=JSON.stringify(data);
    console.log("OBJECT Recieved"+str);
    setProd(data);
  }
  

  
  return (
    <Router>
    <div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userlogin" element={<CFMLogin />} />
        <Route path="/register" element={<CFMRegistration/>} />
        <Route path="/AdminDashboard" element={<CFMAdminDashboard />} />
        <Route path="/AdminLogin" element={<CFMAdminLogin/>} />
        <Route path="/ChangePassword" element={<CFMChangePassword />} />
        <Route path="/DashBoard" element={<CFMDashboard user={userName}/>} />
        <Route path="/ForgotPassword" element={<CFMForgotPassword />} />
        <Route path="/Productinfo" element={<CFMProductInfo user={userName} prod={prod} />} />
        <Route path="/ProductList" element={<CFMProductList user={userName} modify={modify}  />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
