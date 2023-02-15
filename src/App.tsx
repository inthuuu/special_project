import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Home } from "./interfaces/Home"
import Teachload from './interfaces/teachload';
import LoadCheck  from './interfaces/loadCheck';
import From from './components/Form';
import { Conclusion } from "./interfaces/conclusion"
import { Navbar } from "./components/Navbar"
import { Button } from "react-bootstrap"


function App() {

  return (
    <div className='App'>
    <div className="App-header">
        KMITL <br />
        TEACHLOAD
        <div className="col-md-3 row align-item-end">
          <Button className="btn">รักชาติ</Button>
        </div>
    </div>
      <div className='App-subheader'>
    <Navbar />
    </div>
    <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/teachload" element={<Teachload />} />
      <Route path="/conclusion" element={<Conclusion />} />
      <Route path="/loadCheck" element={<LoadCheck />} />
      <Route path="/from" element={<From />} />
      
    </Routes>
  </Container>

  </div>
  )
}

export default App;
