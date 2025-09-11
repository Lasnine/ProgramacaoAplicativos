import { useState } from "react";

export default function Title() {
  const [texto, setTexto] = useState("");
  const [tamanho, setTamanho] = useState(1);
  let Tag = "h1"; 
  if (tamanho === 2) Tag = "h2";
  if (tamanho === 3) Tag = "h3";

  return (
    <div style={{ textAlign: "center", margin: "20px", fontFamily: "sans-serif" }}>
      <div>
        <input
          type="text"
          placeholder="Digite o texto"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{ padding: "8px", margin: "10px" }}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Tamanho (1, 2 ou 3)"
          value={tamanho}
          onChange={(e) => setTamanho(Number(e.target.value))}
          min="1"
          max="3"
          style={{ padding: "8px", margin: "10px" }}
        />
      </div>
      <Tag>{texto || "Título Padrão"}</Tag>
    </div>
  );
}
