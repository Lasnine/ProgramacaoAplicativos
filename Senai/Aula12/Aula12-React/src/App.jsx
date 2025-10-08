import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import About from './Componentes/About'
import Home from './Componentes/Home'
import Profile from './Componentes/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">ÍNICIO</Link>
            <Link to="/About">SOBRE</Link>
            <Link to="/Profile">PERFIL</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Profile/:nome" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App