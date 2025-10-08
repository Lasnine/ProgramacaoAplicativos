// import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Study from './pages/study.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  // const [num, setNum] = useState(0)

  // useEffect(() => {
  //   console.log(`O conteúdo da página foi alterado.\nEstado da variável: ${num}`)
  // }, [num])

  // return (
  //   <>
  //     <h1>{num}</h1>
  //     <button onClick={() => setNum(num + 1)}>Clique aqui</button>

  //     <br />
  //     <Link to="/pages/study">Clique aqui lele</Link>

  //     <Routes>
  //       <Route path="/pages/study" element={<Study />} />
  //     </Routes>
    // </>

  return (
    <>
      <nav>
        <Link to="/">Início</Link> |{" "}
        <Link to="/sobre">Sobre</Link> |{" "}
        <Link to="/study">Estudo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </>
  )
}

export default App