import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Botao } from './Componentes/Botao'

function App() {
  return (
    <>
      <Botao cor="green" conteudo="Login" altura="50px" largura="200px"/>
      <br />
      <br />
      <Botao cor="pink" conteudo="Cadastrar" altura="50px" largura="200px"/>
    </>
  )
}

export default App
