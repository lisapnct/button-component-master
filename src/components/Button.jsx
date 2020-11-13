import React from "react";
import "../stylesheets/buttons.css";

const Button = (props) => {
  return (
    <button className={props.variant 
    ? `${props.variant} button` 
    : "button default"}>
      Default
    </button>
  );
};

export default Button;
