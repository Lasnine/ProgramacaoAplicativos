import { useParams, useNavigate } from "react-router-dom"

export default function User(){
    const {id} = useParams();
    const navigate = useNavigate();
    const titulo = id === "1" ? "ADMINISTRADOR" : "USUÁRIO COMUM";
    return(
        <>
            <h1>Usuário {id}</h1>
            <h2>{titulo}</h2>
            <button onClick={() => navigate("/")}>VOLTAR</button>
        </>
    )
}