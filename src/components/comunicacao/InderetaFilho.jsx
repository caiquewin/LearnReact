import React from "react"; 

export default props =>{
    const cb = props.quandoClicar
    const min = 50;
    const max = 70
    const geraIdade = ()=>parseInt(Math.random()*(max-min)+50)
    const gerarNerd = ()=>Math.random()>0.5
    return(
        <div>
            Filho
            <div>
            <button onClick={_=> cb('joao',geraIdade(),gerarNerd()) }>Fornecer Informações</button>
            </div>
        </div>
    )
}