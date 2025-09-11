import { useState } from "react";

export default function Menssage() {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("Por favor, faça login.");
  const handleLogin = () => {
    setLogado(true);
    setMensagem("Bem-vindo de volta!");
  };

  const handleLogout = () => {
    setLogado(false);
    setNome("");
    setSenha("");
    setMensagem("Por favor, faça login.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>{mensagem}</h1>

      {!logado && (
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ marginRight: "10px", padding: "8px" }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ marginRight: "10px", padding: "8px" }}
          />
          <button
            onClick={handleLogin}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
            }}
          >
            Entrar
          </button>
        </div>
      )}

      {logado && (
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#dc3545",
            color: "white",
          }}
        >
          Sair
        </button>
      )}
    </div>
  );
}