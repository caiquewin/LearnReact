import React , {useState} from "react";

import IndiretaFilho from "./InderetaFilho";

//passar nome idade nerd

export default props =>{
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    function fornecerInformacoes(nome,idade,nerd){
            setNome(nome)
            setIdade(idade)
            setNerd(nerd) 
    }
    return(
        <div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{nerd?"verdadeiro":"falso"}</span>
         <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}>IndiretaFilho</IndiretaFilho>
        </div>
    )
}