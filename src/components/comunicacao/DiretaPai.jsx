import React from "react";

import DiretaFilho from "./DiretaFilho";


export default props =>{
    return(
        <div>
            <DiretaFilho nome="Junior " idade={24} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={14} nerd={false}></DiretaFilho>

        </div>
    )
}