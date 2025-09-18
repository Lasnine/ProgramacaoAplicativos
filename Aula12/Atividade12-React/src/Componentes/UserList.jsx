import { useNavigate, useSearchParams } from "react-router-dom";
import {Link } from "react-router-dom";

export default function UserList(){
    const users = [1,2,3,4,5]
    const navigate = useNavigate();
    return(
        <>
            <h2>LISTA DE USUÁRIOS</h2>
            <ul>
                {users.map((id) => (
                    <li key={id}>
                        <Link to={`/User/${id}`}>USUÁRIO {id}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate("/")}>VOLTAR</button>
        </>
    )
}