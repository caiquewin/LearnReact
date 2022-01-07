import React from "react";

export default (props) => {
  console.log(props.children);
  return (
    <div>
      {/* passando a propriedade do pai para o filho */}
      {props.children.map((child, index) => {
        return React.cloneElement(child, { ...props, key: index });
      })}
    </div>
  );
};
