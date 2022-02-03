import React from "react";

export default (props) => {
  return (
    <label>
      <div>
        <label htmlFor="Numeros ">QTD número gerar: </label>
        <input
          id="numeroInput"
          type="number"
          value={props.TamanhoArry}
          onChange={props.tamanhoArry}
        />
        <div>
          <label htmlFor="NumeroMaximo ">De 0 até: </label>
          <input
            id="NumeroMaximo"
            type="number"
            value={props.NumeroMaximo}
            onChange={props.numeroMaximo}
          />
        </div>
      </div>
    </label>
  );
};
