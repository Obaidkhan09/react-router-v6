import './App.css';
import React from 'react'
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
import NotFoundE from './components/NotFoundE';
import ProductsHome from './components/ProductsHome';
import ProductsDetails from './components/ProductsDetails';


//Components imports



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products' element={<Products />}>
          <Route path='' element={<ProductsHome />}></Route>
          <Route path=':productId' element={<ProductsDetails />}></Route>
        </Route>
        <Route path='*' element={<NotFoundE />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
