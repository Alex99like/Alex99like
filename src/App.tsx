import React from 'react';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import './style/global.scss'

function App() {
  return (
    <div className="wrapper">
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
