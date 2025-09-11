import React from "react";

export default function Avatar({ imagem, online }) {
    return (
        <div style={{ fontFamily: "sans-serif", textAlign: "center", width: "150px" }}>
        <img
            src={imagem}
            alt="Avatar"
            style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #ccc",
            }}
        />
        <div style={{ marginTop: "10px", fontSize: "18px" }}>
            {online ? "🟢 Online" : "🔴 Offline"}
        </div>
        </div>
    );
}
