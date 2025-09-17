import { useState } from "react";

function Contador() {
    const [inicio, setInicio] = useState("0");
    const [passo, setPasso] = useState("1");
    const [valor, setValor] = useState(0);

    const iniciarContador = () => {
        const inicioNum = parseInt(inicio, 10);
        setValor(isNaN(inicioNum) ? 0 : inicioNum);
    };

    const incrementar = () => {
        const passoNum = parseInt(passo, 10);
        setValor((v) => v + (isNaN(passoNum) ? 1 : passoNum));
    };

    const decrementar = () => {
        const passoNum = parseInt(passo, 10);
        setValor((v) => v - (isNaN(passoNum) ? 1 : passoNum));
    };

    return (
        <div>
        <div>
            <label>
            Início:{" "}
            <input
                type="number"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
                style={{
                padding: "8px",
                fontSize: "16px",
                width: "250px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                }}
            />
            </label>
        </div>
        <div>
            <label>
            Passo:{" "}
            <input
                type="number"
                value={passo}
                onChange={(e) => setPasso(e.target.value)}
                style={{
                padding: "8px",
                fontSize: "16px",
                width: "250px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                }}
            />
            </label>
        </div>
        <br />
        <button
            onClick={iniciarContador}
            style={{
            backgroundColor: "#007BFF", 
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            marginRight: "10px",
            }}
        >
            Iniciar Contador
        </button>
        <h2>Valor: {valor}</h2>
        <button onClick={decrementar} style={{ marginRight: "10px" }}>
            -
        </button>
        <button onClick={incrementar}>+</button>
        </div>
    );
}

export default Contador;
