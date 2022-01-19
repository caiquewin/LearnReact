import React from "react";

import IndiretaFilho from "./InderetaFilho";

//passar nome idade nerd

export default props =>{      
    let nome = "?";
    let idade =0;
    let nerd;
    function fornecerInformacoes(nome,idade,nerd){
            console.log(nome,idade,nerd);
    }
    return(
        <div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{nerd}</span>
         <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}>IndiretaFilho</IndiretaFilho>
        </div>
    )
}