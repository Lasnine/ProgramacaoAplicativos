import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

function Card({ character, onClick }) {
  const imgRef = useRef(null);
  const [bgColor, setBgColor] = useState("#ddd");

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      try {
        const colorThief = new ColorThief();
        const result = colorThief.getColor(img);
        setBgColor(`rgb(${result.join(",")})`);
      } catch (error) {
        console.error("Erro ao obter cor dominante:", error);
      }
    }
  }, [character.image]);

  return (
    <li
      onClick={onClick}
      style={{
        cursor: "pointer",
        marginBottom: "8px",
        backgroundColor: bgColor,
        padding: "8px",
        borderRadius: "8px",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        ref={imgRef}
        crossOrigin="anonymous"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginRight: "8px",
          verticalAlign: "middle",
        }}
      />
      {character.name}
    </li>
  );
}

export default Card;