import { useNavigate, useParams } from "react-router-dom"

export default function Produto(){
    const {categoria} = useParams();
    const {id} = useParams();
    const navigate = useNavigate();
    return(
        <>
            <h1>Categoria: {categoria} - Produto: {id}</h1>
            <button onClick={() => navigate("/")}>VOLTAR</button>
        </>
    )
}