import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from './components/pages/Aboutus';
import Products from './components/pages/Businesslist';
import SignUp from './components/pages/SignUp';
import AddBusiness from './components/pages/AddBusiness';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/AddBusiness' element={<AddBusiness/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
