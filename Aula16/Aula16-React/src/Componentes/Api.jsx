import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "../Api.css";

function Api() {
  const [apis, setApis] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    getApis();
  }, []);

  const getApis = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setApis(response.data.results); 
      console.log(response.data.results); 
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const open = (character) => {
    navigate('/Characters', { state: { character } });
  };

  return (
    <>
      <h1 style={{color: '#62b134'}}>PERSONAGENS</h1>
      <ol style={{ textAlign: 'left', paddingLeft: '20px', listStyle: 'none', columns:'2' }}>
        {apis.map(api => (
          <Card
            key={api.id}
            character={api}
            onClick={() => open(api)}
          />
        ))}
      </ol>
    </>
  );
}

export default Api;
