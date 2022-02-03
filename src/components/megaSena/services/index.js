
export const GerarNumero=(TamanhoArry,NumeroMaximo)=>{
    const listaNumero = [];
    
    if(NumeroMaximo>=TamanhoArry){
        while (listaNumero.length < TamanhoArry) {
          let numero = Math.floor(Math.random() * NumeroMaximo);
          const validar = listaNumero.includes(numero);
          if (!validar) {
            listaNumero.push(numero);
          }
        }
          listaNumero.sort((a, b) => a - b);
          return{status:200,result:listaNumero} 
    }else{
        return{status:300,result:`QTD numero gerar:${TamanhoArry} não pode ser maior que ${NumeroMaximo}`}
    }
}