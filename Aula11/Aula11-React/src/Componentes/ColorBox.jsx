import { useState } from "react";

export default function ColorBox() {
  const [largura, setLargura] = useState("200px"); 
  const [altura, setAltura] = useState("200px"); 
  const [cor, setCor] = useState("blue");

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "sans-serif" }}>
      <div>
        <label>Largura: </label>
        <input
          type="text"
          value={largura}
          onChange={(e) => setLargura(e.target.value)}
          placeholder="ex: 200px"
          style={{ margin: "10px", padding: "8px" }}
        />
      </div>
      <div>
        <label>Altura: </label>
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="ex: 200px"
          style={{ margin: "10px", padding: "8px" }}
        />
      </div>
      <div>
        <label>Cor: </label>
        <input
          type="text"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          placeholder="ex: blue"
          style={{ margin: "10px", padding: "8px" }}
        />
      </div>

      <div
        style={{
          width: largura,
          height: altura,
          backgroundColor: cor,
          border: "1px solid #000",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
}
