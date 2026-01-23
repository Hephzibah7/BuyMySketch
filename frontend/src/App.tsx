import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './authentication/Login';
import SignUp from './authentication/Signup';
import Product from './component_EachProduct/Product';
import Navbar from './component_AllProducts/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Product/>
    </div>
  );
}

export default App;
