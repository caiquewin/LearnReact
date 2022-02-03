import React from "react";
import Display from "./Display";
import FormMega from './MegaForm'
import BotaoGerar from "./BotaoGerar";
import * as services from './services/index'
class MegaSena extends React.Component {
  state = {
    Numero: [],
    TamanhoArry: 7,
    NumeroMaximo: 100,
  };
  constructor(props) {
    super(props);
  }

  tamanhoArry = (evento) => {
    this.setState({
      TamanhoArry: evento.target.value,
    });
  };
  numeroMaximo = (evento) => {
    this.setState({
      NumeroMaximo: evento.target.value,
    });
  };
  GerarNumero=()=>{
    const TamanhoArry =this.state.TamanhoArry
    const NumeroMaximo = this.state.NumeroMaximo
      const valor =services.GerarNumero(TamanhoArry,NumeroMaximo)
    if(valor.status==200){
          this.setState({ Numero: valor.result });
    }else{
        alert(valor.result)
    }
  }

  render() {
    return (
      <div>
        <Display Numero={this.state.Numero}/>
        <FormMega TamanhoArry={this.state.TamanhoArry} tamanhoArry={this.tamanhoArry} NumeroMaximo={this.state.NumeroMaximo} numeroMaximo={this.numeroMaximo}/>
          <BotaoGerar GerarNumero={this.GerarNumero}/>
      </div>
    );
  }
}

export default MegaSena;
