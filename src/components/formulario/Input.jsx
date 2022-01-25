import "./Input.css";
import React, { useState } from "react";
export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(evento) {
    const targetValue = evento.target.value;
    setValor(targetValue);
  }
  return (
    <div className="Input" >
      <h2>{valor}</h2>
      <div style={{ display: "flex", flexDirection: "column   " }}>
      {/* componente controlado */}
        <input
          value={valor}
          onChange={(e) => quandoMudar(e)}
        />
        {/* componente com unico valor */}
        <input value={valor} readOnly 
        />
        {/* componente não controlado */}
          <input value={undefined}
        />
      </div>
    </div>
  );
};
