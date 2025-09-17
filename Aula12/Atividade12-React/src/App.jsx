import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Home from './Componentes/Home'
import Produto from './Componentes/Produto'
import User from './Componentes/User'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/Produto">PRODUTOS</Link>
            <Link to="/User">USUARIO</Link>
            <Link to="/User/1">ADMIM</Link>
            <Link to="/User/2">USER2</Link>
            <Link to="/User/3">USER3</Link>
            <Link to="/User/4">USER4</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Produto/:categoria/:id" element={<Produto/>}/>
          <Route path="/User/:id" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App