import { useEffect, useState } from "react"
import { BotaoCSS } from "./components/BotaoCSS"
import { BotaoTW } from "./components/BotaoTW"
import axios from "axios"


function App() {
  // {}
  // [{},{},{}]
  // https://jsonplaceholder.typicode.com/users -> formato array
  // https://dog.ceo/api/breeds/image/random -> formato objeto
  const [dog, setDog] = useState({})
  const [users,setUsers] = useState([])

  const getDogData = async () => { //No singular, pois é apenas um objeto.
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    setDog(response.data)
    console.log(response.data)
  }

   const getUsersData = async () => { //No plural, pois é um array, ou seja, mais de um objeto
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
    console.log(response.data)
  }

  return (
    <>
      {/* <button onClick={() => getDogData()}>Buscar imagem</button>
      <img src={dog.message} alt="" /> */}
      <button onClick={() => getUsersData()}>Receber usuários</button>
      {
        users.filter(user => <><span>{user.name} {user.address.street}</span><br /></>)
      }
    </>
  )
}

export default App
