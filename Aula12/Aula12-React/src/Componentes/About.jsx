import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate();
    return(
        <>
            <h1>SOBRE</h1>
            <button onClick={() => navigate("/")}>VOLTAR</button>
        </>
    )
}