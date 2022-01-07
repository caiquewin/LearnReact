import React from "react";
import TabelaProdutos from "../../data/produtos";
export default (prop) => {
  //retorna uma tabela e listando todos prodtos
  //criar uma tabela para id outra para produto e outra para preco
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
    <table style={{ display: "inline" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{tabelaProdutos}</tbody>
    </table>
  );
};
