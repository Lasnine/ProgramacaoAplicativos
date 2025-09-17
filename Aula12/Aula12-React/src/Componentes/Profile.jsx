import { useParams } from "react-router-dom"

export default function Profile(){
    const {nome} = useParams();
    return(
        <>
            <h1>Perfil {nome}</h1>
        </>
    )
}