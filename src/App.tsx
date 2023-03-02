import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Education } from './components/Education/Education';
import { Home } from './components/Home/Home';
import { Message } from './components/Message/Message';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './style/global.scss'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/message' element={<Message />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
