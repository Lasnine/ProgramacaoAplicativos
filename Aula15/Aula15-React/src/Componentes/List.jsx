import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function List() {
  const [users, setUsers] = useState([]);  
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  const open = (user) => {
    navigate('/user', { state: { user } });
  };

  return (
    <>
      <h1>USUÁRIOS</h1>
      <ol style={{ textAlign: 'left', paddingLeft: '20px' }}>
        {users.map(user => (
          <li 
            key={user.id}
            onClick={() => open(user)}
            style={{ cursor: 'pointer', marginBottom: '8px' }}>
            {user.name}
          </li>
        ))}
      </ol>
    </>
  );
}

export default List;
