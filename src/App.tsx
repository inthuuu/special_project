import React, { ProfilerProps } from 'react';
import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Home } from "./interfaces/Home"
import Teachload from './interfaces/teachload';
// import { Teachload } from './interfaces/teachload'
import { Conclusion } from "./interfaces/conclusion"
import { Navbar } from "./components/Navbar"
import List  from './components/List';

function App() {
  return (
    <div className='App'>
    <div className="App-header">
      KMITL <br />
      TEACHLOAD
    </div>
      <div className='App-subheader'>
    <Navbar />
    </div>
    <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teachload" element={<Teachload />} />
      <Route path="/conclusion" element={<Conclusion />} />
    </Routes>
  </Container>
    
  </div>
  )
}

export default App;
