import React from "react";
import Fragmento from "./components/basico/Fragmento";
import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro'
import Aleatorio from "./components/basico/Aleatorio";

export default function App(props){
return(
    <div>
    <ComParametro
    titulo='Situação do aluno'
    subtitulo='subtitulo'
    aluno='Pedro' nota={6.5} />
      <ComParametro
    titulo='Situação do aluno'
    subtitulo='subtitulo'
    aluno='Maria' nota={9.9} />
    <Primeiro />
    <Fragmento/> 
    <Aleatorio min={5.0} max={10}/>
</div>
)
}