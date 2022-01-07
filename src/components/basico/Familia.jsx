import React from "react";
import FamiliaMembro from "./FamiliaMembro";
export default (props)=>{

    return(
        <div>
            <FamiliaMembro nome="Caique" {...props}/>
            <FamiliaMembro nome="Paulo"  {...props}/>
            <FamiliaMembro nome="Carlos"  {...props}/>

        </div>
    )
}