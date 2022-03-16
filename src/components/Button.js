import React from 'react';
import './Button.css';

const Button = ({bgColor, caption, handleClick}) => {
  return (
    <button 
      className='button' 
      style={{'backgroundColor': bgColor}}
      onClick={handleClick}
    >
      {caption}
    </button>
  );
};

export default Button;