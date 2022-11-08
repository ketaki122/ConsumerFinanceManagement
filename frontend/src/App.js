import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import CFMLogin,{Loginwithrouter} from "./components/CFMLogin";
import Homepage from "./components/homepage";
import CFMRegistration,{Registerwithrouter} from "./components/CFMRegistration";
import CFMAdminDashboard from "./components/CFMAdminDashboard";
import CFMAdminLogin from "./components/CFMAdminLogin";
import CFMChangePassword from "./components/CFMChangePassword";
import CFMDashboard from "./components/CFMDashboard";
import CFMForgotPassword from "./components/CFMForgotPassword";
import CFMProductInfo from "./components/CFMProductInfo";
import CFMProductList from "./components/CFMProductList";
import axios from 'axios'

function App() {
  return (
    <Router>
    <div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userlogin" element={<Loginwithrouter />} />
        <Route path="/register" element={<Registerwithrouter/>} />
        <Route path="/AdminDashboard" element={<CFMAdminDashboard />} />
        <Route path="/AdminLogin" element={<CFMAdminLogin/>} />
        <Route path="/ChangePassword" element={<CFMChangePassword />} />
        <Route path="/DashBoard" element={<CFMDashboard />} />
        <Route path="/ForgotPassword" element={<CFMForgotPassword />} />
        <Route path="/Productinfo" element={<CFMProductInfo />} />
        <Route path="/ProductList" element={<CFMProductList />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
