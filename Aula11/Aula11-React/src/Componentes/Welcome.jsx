import { useState, useEffect } from "react";

export default function Welcome() {
  const [nome, setNome] = useState("");
  const [hora, setHora] = useState(null);

  useEffect(() => {
        function getHoraBrasilia() {
        const agora = new Date();
        const utc = agora.getTime() + agora.getTimezoneOffset() * 60000;
        const offset = -3; 
        const horaBr = new Date(utc + 3600000 * offset);

        return horaBr.getHours();
        }

        setHora(getHoraBrasilia());
    }, []);

    let saudacao = "";

    if (hora === null) {
        saudacao = "Carregando horário...";
    } else if (hora < 12) {
        saudacao = `Bom dia, ${nome || "Visitante"}`;
    } else if (hora < 18) {
        saudacao = `Boa tarde, ${nome || "Visitante"}`;
    } else {
        saudacao = `Boa noite, ${nome || "Visitante"}`;
    }

    return (
        <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
        />
        <div style={{ fontSize: "24px" }}>{saudacao}</div>
        </div>
    );
}
