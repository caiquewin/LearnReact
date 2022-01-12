import React from "react";

export default props=>{

    const isPar =props.numero%2==0?"Par":"Impar";

    return<span>{isPar}</span >;
    
    
}