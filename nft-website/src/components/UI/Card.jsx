import React from 'react';
import './UI.css';

const Card = (props) => {
  return (
    <div className={`ui-card ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;