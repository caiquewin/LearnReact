// component vai pegar um valor maximo (max)
// vai pegar o valor minimo (min)

// numero aleatório java script entre dois valores

import React from "react";


export default function (props){
    const valor =getRandomInt(props.min,props.max)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    return(
        <>
        <h2>Valor aleatório</h2>
        <p>
            <strong>Valor minimo:</strong>{props.min}
        </p>
        <p>
            <strong>Valor máximo:</strong>{props.max}
        </p>
        <p>
            <strong>Valor escolhino:</strong>{valor}
        </p>
        </>
    )
}