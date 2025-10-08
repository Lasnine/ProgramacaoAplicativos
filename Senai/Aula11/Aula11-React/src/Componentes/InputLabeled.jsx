import { useState } from "react";

function Input({ label, placeholder, value, onChange, type = "text" }) {
  return (
    <div style={{ marginBottom: "15px", fontFamily: "sans-serif" }}>
      <label
        style={{
          display: "block",
          marginBottom: "5px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "250px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default function InputLabeled() {
  const [valores, setValores] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (campo, valor) => {
    setValores((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  return (
    <div>
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        value={valores.nome}
        onChange={(v) => handleChange("nome", v)}
      />
      <Input
        label="Email"
        placeholder="Digite seu email"
        value={valores.email}
        onChange={(v) => handleChange("email", v)}
        type="email"
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        value={valores.senha}
        onChange={(v) => handleChange("senha", v)}
        type="password"
      />
    </div>
  );
}

