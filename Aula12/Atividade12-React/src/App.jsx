import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Home from './Componentes/Home'
import Produto from './Componentes/Produto'
import User from './Componentes/User'
import UserList from './Componentes/UserList'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/Produto">PRODUTOS</Link>
            <Link to="/User">USUARIO</Link>
            <Link to={"/UserList"}>LISTA DE USUÁRIOS</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Produto/:categoria/:id" element={<Produto/>}/>
          <Route path="/User/:id" element={<User/>}/>
          <Route path="/UserList" element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App