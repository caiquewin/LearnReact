import './Contador.css'
import React, { Component } from "react";
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };
  constructor(props) {
    super(props);
    // this.inc =this.inc.bind(this)
  }

  somar = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };
  subtrair() {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  }
  setPasso=(evento)=>{
    this.setState({
        passo:+evento.target.value
    })
  }
  render() {
    return (
      <div className='Contador'>
        <Display numero={this.state.numero}/>
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
        <Botoes somar={this.somar} subtrair={(_) => this.subtrair()}/>
      </div>
    );
  }
}

export default Contador;
