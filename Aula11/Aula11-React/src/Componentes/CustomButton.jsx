import React from "react";

function CustomButton({ texto, cor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: cor,
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
      {texto}
    </button>
  );
}

export default CustomButton;
