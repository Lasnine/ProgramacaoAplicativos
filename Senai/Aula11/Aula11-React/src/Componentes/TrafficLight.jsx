import { useState, useEffect } from "react";

export default function TrafficLight() {
  const cores = ["red", "yellow", "green"];
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % cores.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: "40px" }}>
      <h1>Semáforo</h1>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px" }}>
        {cores.map((cor, i) => (
          <div
            key={i}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: i === indice ? cor : "white",
              border: `3px solid ${cor}`,
              transition: "background-color 0.5s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}