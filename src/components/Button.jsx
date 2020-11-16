import React from "react";
import "../stylesheets/buttons.css";

const Button = (props) => {
  const variant =
    props.variant && props.color
      ? `${props.variant} ${props.color}`
      : props.variant
      ? props.variant
      : props.color
      ? props.color
      : "default";
  const shadow = props.disableShadow ? "no-shadow" : "";
  const disabled = props.disabled ? "disabled" : "";
  const size = props.size ? props.size : "";

  const buttonStyle = `button ${variant} ${shadow} ${disabled} ${size}`;

  return (
    <button className={buttonStyle}>
      {props.start_icon && (
        <i className="material-icons" id="start_icon">
          {props.start_icon}
        </i>
      )}
      {props.content ? props.content : "Default"}
      {props.end_icon && (
        <i className="material-icons" id="end_icon">
          {props.end_icon}
        </i>
      )}
    </button>
  );
};

export default Button;
