import React from 'react';
import '../styles/Frame.css';

const Frame = (props) => {
  return (
    <div className="frame" style={{ border: `2px solid ${props.accent}` }}>
      <img 
        src={props.image}
        alt={props.description}
        className="art"
      />
      <div className="desc">
        <p style={{ fontSize: `${(props.description).length <= 55 ? '.9rem' : '.75rem' }` }}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Frame;