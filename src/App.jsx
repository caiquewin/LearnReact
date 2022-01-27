import "./App.css";
import React from "react";

import Input from "./components/formulario/Input";
import InderetaPai from './components/comunicacao/InderetaPai'
import DiretaPai from'./components/comunicacao/DiretaPai'; 
import Card from "./components/layout/Card";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Fragmento from "./components/basico/Fragmento";
import Primeiro from "./components/basico/Primeiro";
import ComParametro from "./components/basico/ComParametro";
import Aleatorio from "./components/basico/Aleatorio";
import Familia from "./components/basico/Familia";
import FamiliaMembro from "./components/basico/FamiliaMembro";
import Contador from './components/contador/Cotnador'

export default function App(props) {
  return (
    <div className="App">
      <h1>Fudamentos React</h1>

      <div className="Cards">

      <Card titulo="#12 Contador" color="teal">
      <Contador numeroInicial={10}/>
        </Card>

      <Card titulo="#11 Componente Controlado" color="navy">
      <Input></Input>
        </Card>

      <Card titulo="#10 Comunicação Indireta" color="red">
      <InderetaPai></InderetaPai>
        </Card>

      <Card titulo="#09 Comunicação Direta" color="violet">
      <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 Renderização Condicional" color="grey">
          <ParOuImpar numero={50}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
          <UsuarioInfo usuario={{ name: "" }}></UsuarioInfo>
          <UsuarioInfo></UsuarioInfo>
        </Card>

        <Card titulo="#07 Desafio Repetição" color="purple">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 Repetição" color="brown">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 Componente Filhos" color="orange">
          <Familia sobrenome="Alves">
            <FamiliaMembro nome="Caique" />
            <FamiliaMembro nome="Paulo" />
            <FamiliaMembro nome="Carlos" />
          </Familia>
        </Card>

        <Card titulo="#04 Desafio Aleatório" color="pink">
          <Aleatorio min={5.0} max={10} />
        </Card>

        <Card titulo="#03 Fragemento" color="green">
          <Fragmento />
        </Card>

        <Card titulo="#02 Com Parâmetro" color="yellow">
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
