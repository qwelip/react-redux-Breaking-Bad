import React from 'react';
import './Button.css';

const Button = ({bgColor, caption, handleClick, isActive}) => {
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

Button.defaultProps = {
  isActive: true
}

export default Button;