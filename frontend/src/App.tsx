import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './authentication/Login';
import SignUp from './authentication/Signup';
// import Product from './component_AllProducts/Product';
import Product from './component_EachProduct/Product';
import Navbar from './component_AllProducts/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/" element={<Product />} />
          <Route path="/login" element={<Login />} />
      {/* <Navbar/> */}
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
