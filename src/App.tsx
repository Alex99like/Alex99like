import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import './style/global.scss'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
