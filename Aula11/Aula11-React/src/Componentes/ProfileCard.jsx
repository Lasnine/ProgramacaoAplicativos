import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

function ProfileCard() {
    const [perfis, setPerfis] = useState([
        { nome: "", idade: "", profissao: "" },
        { nome: "", idade: "", profissao: "" },
        { nome: "", idade: "", profissao: "" },
    ]);

    useEffect(() => {
        console.log("Perfis atualizados:", perfis);
    }, [perfis]);

    const handleChange = (index, campo, valor) => {
        const novosPerfis = [...perfis];
        novosPerfis[index][campo] = valor;
        setPerfis(novosPerfis);
    };

    const salvarEmArquivo = () => {
        const dados = JSON.stringify(perfis, null, 2);
        const blob = new Blob([dados], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "perfis.json";
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const limparCampos = () => {
        setPerfis([
        { nome: "", idade: "", profissao: "" },
        { nome: "", idade: "", profissao: "" },
        { nome: "", idade: "", profissao: "" },
        ]);
    };

    return (
        <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <h1>Cadastro de Perfis</h1>
        {perfis.map((perfil, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
            <h3>Perfil {index + 1}</h3>
            <input
                type="text"
                placeholder="Nome"
                value={perfil.nome}
                onChange={(e) => handleChange(index, "nome", e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <input
                type="number"
                placeholder="Idade"
                value={perfil.idade}
                onChange={(e) => handleChange(index, "idade", e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <input
                type="text"
                placeholder="Profissão"
                value={perfil.profissao}
                onChange={(e) => handleChange(index, "profissao", e.target.value)}
            />
            </div>
        ))}

        <div style={{ marginBottom: "20px" }}>
            <CustomButton texto="Salvar" cor="#28a745" onClick={salvarEmArquivo} />
            <CustomButton texto="Cancelar" cor="#dc3545" onClick={limparCampos} />
        </div>

        <hr />

        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
            {perfis.map((perfil, index) => (
            <div
                key={index}
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                    width: "200px",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
            >
                <h2>{perfil.nome || "Nome"}</h2>
                <p>Idade: {perfil.idade || "-"}</p>
                <p>Profissão: {perfil.profissao || "-"}</p>
            </div>
            ))}
        </div>
        </div>
    );
}

export default ProfileCard;
