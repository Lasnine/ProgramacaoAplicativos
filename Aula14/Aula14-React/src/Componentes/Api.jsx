import { useEffect, useState } from 'react'
import axios from 'axios'

function Api(){
    const[dog, setDog] = useState({});
    const getDog = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
        setDog(response.data)
    }
    useEffect(() => {
        getDog()
    }, [])

    return (
        <>
        <h1>CACHORROS</h1>
        <img src={dog.message}></img>
        <br />
        <br />
        <button onClick={getDog} style={{ backgroundColor: 'thistle' }}>CLIQUE AQUI</button>
        </>
    )
}
export default Api