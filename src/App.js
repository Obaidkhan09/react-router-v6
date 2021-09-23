import './App.css';
import React from 'react'
import Header from './components/Header';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';


//Components imports



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products' element={<Products />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
