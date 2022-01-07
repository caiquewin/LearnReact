import React from "react";
import TabelaProdutos from "../../data/produtos";

export default (prop) => {
    
  const tabelaProdutos = TabelaProdutos.map((produtos, index) => {
    return (
      <tr key={index}>
        <td>{produtos.id}</td>
        <td>{produtos.nome}</td>
        <td>{produtos.preco}</td>
      </tr>
    );
  });

  return (
    <table style={{ textAling: "center" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody style={{ textAlignLast: "center" }}>{tabelaProdutos}</tbody>
    </table>
  );
};
