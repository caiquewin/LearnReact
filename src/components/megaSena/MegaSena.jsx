import React from "react";

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
  GerarNumero() {
    const listaNumero = [];
    if(this.state.TamanhoArry<this.state.NumeroMaximo || this.state.TamanhoArry==this.state.NumeroMaximo){
        while (listaNumero.length < this.state.TamanhoArry) {
          let numero = Math.floor(Math.random() * this.state.NumeroMaximo);
          const validar = listaNumero.includes(numero);
          if (!validar) {
            listaNumero.push(numero);
          }
        }
          listaNumero.sort((a, b) => a - b);
          this.setState({ Numero: listaNumero });
    }else{
        alert('Numero de geraar não pode ser maior que "De 0 ate :"')
    }
  }

  render() {
    return (
      <div>
        {this.state.Numero.length > 0 ? (
            <>
            Números Sorteados:
            <div
            style={{
                display: "flex",
                justifyContent: "space-around",
            }}
            >
            {this.state.Numero.map((e, index) => {
                return <div key={e}>{e}</div>;
            })}
          </div>
            </>
        ) : (
          <>Gere Numero Desejado</>
        )}
        <label>
          <div>
            <label htmlFor="Numeros ">QTD número gerar: </label>
            <input
              id="numeroInput"
              type="number"
              value={this.state.TamanhoArry}
              onChange={this.tamanhoArry}
            />
            <div>
              <label htmlFor="NumeroMaximo ">De 0 até: </label>
              <input
                id="NumeroMaximo"
                type="number"
                value={this.state.NumeroMaximo}
                onChange={this.numeroMaximo}
              />
            </div>
            <button onClick={(_) => this.GerarNumero()}>Gerar Números</button>
          </div>
        </label>
      </div>
    );
  }
}

export default MegaSena;
