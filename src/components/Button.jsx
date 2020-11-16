import React from "react";
import "../stylesheets/buttons.css";

const Button = (props) => {
  const variant = props.variant ? props.variant : "default";
  const shadow = props.disableShadow ? "no-shadow" : "";
  const disabled = props.disabled ? "disabled" : "";
  const size = props.size ? props.size : "";
  const color = props.color ? props.color : "";

  const buttonStyle = `button ${variant} ${shadow} ${disabled} ${color} ${size}`;

  return (
    <button className={buttonStyle}>
      {props.start_icon && (
        <i className="material-icons" id="start_icon">
          {props.start_icon}
        </i>
      )}
      {props.content ? props.content : "default"}
      {props.end_icon && (
        <i className="material-icons" id="end_icon">
          {props.end_icon}
        </i>
      )}
    </button>
  );
};

export default Button;
