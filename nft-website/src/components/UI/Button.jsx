import React from 'react';
import './UI.css';

const Button = (props) => {
  return (
    <button
      className={`ui-button ${props.className}`}
      type={props.type || 'submit'}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;