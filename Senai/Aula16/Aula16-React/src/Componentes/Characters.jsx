import { useLocation } from "react-router-dom";
import '../Api.css';

function Characters() {
    const location = useLocation();
    const { character } = location.state || {};

    if (!character) return <p>Nenhum personagem selecionado</p>;

    return (
        <>
        <div className="w-500 flex justify-center bg-lime-400">
            <h1 className="mt-10 text-lime-900">{character.name}</h1>
            <div className="flex text-lime-900">
                <img src={character.image} alt={character.name} className="w-100 ml-4 rounded-lg" />
                <p className="mt-6 ml-15 text-left"><strong>Status:</strong> {character.status}</p>
                <p className="ml-15 text-left"><strong>Espécie:</strong> {character.species}</p>
                <p className="ml-15 text-left"><strong>Tipo:</strong> {character.type || "Desconhecido"}</p>
                <p className="ml-15 text-left"><strong>Gênero:</strong> {character.gender}</p>
                <p className="ml-15 text-left"><strong>Origem:</strong> {character.origin?.name}</p>
                <p className="ml-15 text-left"><strong>Localização atual:</strong> {character.location?.name}</p>
            </div>
        </div>
        </>
    );
}

export default Characters;