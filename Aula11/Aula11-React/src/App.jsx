import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './Componentes/ProfileCard'
import CustomButton from './Componentes/CustomButton'
import Menssage from './Componentes/Menssage'
import Title from './Componentes/Title'
import ColorBox from './Componentes/ColorBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProfileCard></ProfileCard>
    <CustomButton></CustomButton>
    <Menssage></Menssage>
    <Title></Title>
    <ColorBox></ColorBox>
    </>
  )
}

export default App
