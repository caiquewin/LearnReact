import React from "react";

export default (props)=>{

    return(
        <div>
            {/* passando a propriedade do pai para o filho */}
            {React.Children.map(props.children,(child)=>{
                return React.cloneElement(child,{...props})
            })} 
        </div>
    )
}