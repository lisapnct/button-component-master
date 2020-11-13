import React from "react";
import "../stylesheets/buttons.css";

const Button = (props) => {
  const variant = props.variant ? props.variant : "default";
  const shadow = props.disableShadow ? "no-shadow" : "";
  
  const buttonStyle = `button ${variant} ${shadow} `;
  
  return <button className={buttonStyle}>Default</button>;
};

export default Button;
