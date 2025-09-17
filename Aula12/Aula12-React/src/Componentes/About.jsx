import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    return(
        <>
            <h1>SOBRE</h1>
            <button onClick={() => navigate("/")}>VOLTAR</button>
        </>
    )
}