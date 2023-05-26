import React from 'react'
import Nav1 from './Units/Nav1'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Additem from './Pages/Additem';
import Login from './Pages/Login';
export default function App()
 {
  return (
    <div>
      <Nav1></Nav1> 
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Additem/>} />
          <Route path="/about" element={<Login/>} />
       </Routes>
      </div>
  )
}
