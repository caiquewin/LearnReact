import React from "react"; 

export default props =>{
    const cv = props.quandoClicar
    return(
        <div>
            Filho
            <div>
            <button onClick={_=> cv('joao',53,true) }>Fornecer Informações</button>
            </div>
        </div>
    )
}