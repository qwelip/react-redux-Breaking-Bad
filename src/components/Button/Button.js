import React from 'react';
import './Button.css';

const Button = ({bgColor, caption, handleClick, isActive}) => {
  return (
    <button 
      className='button' 
      style={{'backgroundColor': bgColor, 'cursor': isActive ? 'pointer' : 'not-allowed'}}
      onClick={handleClick}
      disabled={!isActive}
    >
      {caption}
    </button>
  );
};

Button.defaultProps = {
  isActive: true
}

export default Button;