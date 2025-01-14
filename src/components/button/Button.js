import React, { useState } from 'react';
import { Size, textStyle } from '../text/shared';
import { Color } from '../../styles/color'

export const Button = ({ 
  content='',
  color='',
  textColor='', 
  onClick,
 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    backgroundColor: color ? color : Color.WHITE,
    width: 'fit-content',
    padding: '20px 20px 15px 20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  const hoverStyle = {
    ...baseStyle,
    backgroundColor: Color.PRIMARY,
  };

  const buttonTextStyle = {
    ...textStyle,
    fontSize: Size.BODY,
    color: textColor ? textColor : Color.BLACK,
    margin: 0,
    fontWeight: 'bold',
  };

  return (
    <button 
      style={isHovered ? hoverStyle : baseStyle}
      onClick={onClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={buttonTextStyle}>{content}</p>
    </button>
  );
};
