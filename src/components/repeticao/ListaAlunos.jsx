import React from "react";
import alunos from "../../data/alunos";
export default (props) => {
    
  const mapAlunos = alunos.map((aluno, index) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) Nome: {aluno.nome} Nota:{aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{listStyle:"none"}}>{mapAlunos}</ul>
    </div>
  );
};
