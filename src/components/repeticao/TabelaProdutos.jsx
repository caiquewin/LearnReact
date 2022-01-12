import React from "react";

import "./TabelaProdutos.css";

import TabelaProdutos from "../../data/produtos";

export default (prop) => {
  //retorna uma tabela e listando todos prodtos
  //criar uma tabela para id outra para produto e outra para preco
  const tabelaProdutos = TabelaProdutos.map((produtos, index) => {
    return (
      <tr className={index % 2 == 0 ? "Par" : "Impar"} key={index}>
        <td>{produtos.id}</td>
        <td>{produtos.nome}</td>
        <td>R$ {produtos.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{tabelaProdutos}</tbody>
    </table>
    </div>
  );
};
