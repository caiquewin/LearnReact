import React from "react";

export default (props)=>{

    return(
        <div>
            {/* passando a propriedade do pai para o filho */}
            {React.cloneElement(props.children,{...props})} 
        </div>
    )
}