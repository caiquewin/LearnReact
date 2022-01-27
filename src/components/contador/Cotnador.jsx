import './Contador.css'
import React, { Component } from "react";

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
        <div>CONTADOR: {this.state.numero}</div>
        <label>
            <div>
                <label htmlFor="passoInput">Passo: </label>
                <input id="passoInput" type="number"
                value={this.state.passo}
                onChange={this.setPasso}
                />
            </div>
        </label>
        <button onClick={this.somar}>+</button>
        <button onClick={(_) => this.subtrair()}>-</button>
      </div>
    );
  }
}

export default Contador;
