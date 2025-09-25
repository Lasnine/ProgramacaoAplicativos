import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Componentes/Home'
import List from './Componentes/List'
import Users from './Componentes/Users'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/user" element={<Users />} />
      </Routes>
      <nav>
        <Link to="/" className='botao-link'>HOME</Link>
        <Link to="/list" className='botao-link'>LIST</Link>
      </nav>
    </BrowserRouter>
    </>
  )
}

export default App