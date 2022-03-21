// import profile from "../src/image/a.png";
// import email from "../src/image/email.jpg";
// import pass from "../src/image/pass.png";
import './App.css';
import Login from './Component/Login'
import Forgetpassword from './Component/Forgetpassword';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  return (
   
    <Router>
 
         
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Forgetpassword" element={<Forgetpassword />} />     
    </Routes>




</Router>
   
  );
}

export default App;
