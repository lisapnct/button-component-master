import React from "react";
import "../stylesheets/buttons.css";

const Button = (props) => {
  const variant = props.variant ? props.variant : "default";
  const shadow = props.disableShadow ? "no-shadow" : "";
  const disabled = props.disabled ? "disabled" : "";
  const size = props.size ? props.size : "";
  
  const buttonStyle = `button ${variant} ${shadow} ${disabled} ${size}`;

  return <button className={buttonStyle}>Default</button>;
};

export default Button;
