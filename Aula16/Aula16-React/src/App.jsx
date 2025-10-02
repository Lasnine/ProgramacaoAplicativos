import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Componentes/Home'
import Api from './Componentes/Api'
import Characters from './Componentes/Characters'
import Abount from './Componentes/Abount';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/" >HOME</Link>
            <Link to="/api" >CHARACTERS</Link>
            <Link to="/abount" >ABOUNT</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/api" element={<Api/>} />
          <Route path="/Characters" element={<Characters/>} />
          <Route path="/Abount" element={<Abount/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
