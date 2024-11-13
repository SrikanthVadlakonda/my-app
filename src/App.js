import React from 'react';
import ProductCategery from './components/ProductCategory';
import SelectProductById from './components/SelectProductById';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductCategery />} />
        <Route path='/selectProduct' element={<SelectProductById />} />
      </Routes>
    </div>
  );
};

export default App;
