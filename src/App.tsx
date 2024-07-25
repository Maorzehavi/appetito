import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DishList from './features/DishList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DishList />} />

        <Route path="/dishes" element={<DishList />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
