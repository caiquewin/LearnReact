import './App.css';
import React from "react";

import Card from "./components/layout/Card";

import ListaAlunos from './components/repeticao/ListaAlunos'
import Fragmento from "./components/basico/Fragmento";
import Primeiro from "./components/basico/Primeiro";
import ComParametro from "./components/basico/ComParametro";
import Aleatorio from "./components/basico/Aleatorio";
import Familia from './components/basico/Familia';
import FamiliaMembro from './components/basico/FamiliaMembro';

export default function App(props) {
  return (
    <div className="App">
      <h1>Fudamentos React</h1>

      <div className="Cards">
        
        <Card titulo="#06 Repetição" color="brown">
    <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 Componente Filhos" color="orange">
          <Familia sobrenome="Alves">
          <FamiliaMembro nome="Caique"/>
            <FamiliaMembro nome="Paulo" />
            <FamiliaMembro nome="Carlos"/>
            </Familia>
        </Card>

        <Card titulo="#04 Desafio Aleatório" color="pink">
          <Aleatorio min={5.0} max={10} />
        </Card>

        <Card titulo="#03 Fragemento"color="green">
          <Fragmento />
        </Card>

        <Card titulo="#02 Com Parâmetro"color="yellow">
          <ComParametro
            titulo="Situação do aluno"
            subtitulo="subtitulo"
            aluno="Pedro"
            nota={6.5}
          />
        </Card>

        <Card titulo="#01 Primeiro Componente" color="blue">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
