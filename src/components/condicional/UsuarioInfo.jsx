import React from "react";
import If  from "./If.js"

export default props=>{
    const usuario = props.usuario || {}
    return(
        <div>
            <If  teste={usuario && usuario.nome}>
            Seja bem vindo <strong>{props.usuario.nome} </strong>!
            </If>
            <If  teste={!usuario || !usuario.nome}>
            Seja bem vindo <strong>Amigão </strong>!
            </If>
        </div>
    )
}