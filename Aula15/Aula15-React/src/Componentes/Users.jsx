import { useLocation } from "react-router-dom";

function Users() {
    const location = useLocation();
    const { user } = location.state || {};

    if (!user) return <p>Nenhum usuário selecionado</p>;

    return (
        <>
        <h1>PERFIL DO USUÁRIO</h1>
        <div className="flex">
            <p><strong>Nome: </strong>{user.name}</p>
            <br />
            <p><strong>Email: </strong>{user.email}</p>
            <br />
            <p><strong>Telefone: </strong>{user.phone}</p>
            <br />
        </div>
        </>
    );
}

export default Users;