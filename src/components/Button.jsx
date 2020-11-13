import React from "react";
import "../stylesheets/buttons.css";

const Button = (props) => {
  const variant = props.variant ? props.variant : "default";
  const shadow = props.disableShadow ? "no-shadow" : "";
  const disabled = props.disabled ? "disabled" : "";
  const buttonStyle = `button ${variant} ${shadow} ${disabled}`;

  return <button className={buttonStyle}>Default</button>;
};

export default Button;
