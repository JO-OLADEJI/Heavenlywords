import React from 'react';
import './UI.css';

const Input = (props) => {
  const id = Math.random().toString();

  return (
    <div className="ui-input">
      <input 
        id={id}
        className={`ui-input-field ${props.className}`}
        type={props.type || 'text'}
        min={props.min}
        max={props.max}
        placeholder=" "
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autoComplete || 'off'}
      />
      <label htmlFor={id} className="placeholder">{props.placeholder}</label>
    </div>
  );
}
 
export default Input;