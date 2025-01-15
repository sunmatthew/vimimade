import React, { useCallback, useState } from 'react';
import { Size, textStyle } from '../text/shared';
import { Color } from '../../styles/color';

export const FilterButton = ({ 
  content='',
  onClick,
  active = false,
 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const activeStyle = {
    backgroundColor: Color.BEIGHT_DARK_2
  };

  let baseStyle = {
    backgroundColor: Color.BEIGHT_DARK,
    width: 'fit-content',
    padding: '15px 20px 10px 20px',
    border: 'none',
    borderRadius: '60px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  // Combine active style with baseStyle when active or hovered
  if (active || isHovered) {
    baseStyle = { ...baseStyle, ...activeStyle };
  }

  const buttonTextStyle = {
    ...textStyle,
    fontSize: Size.BODY,
    color: Color.WHITE,
    margin: 0,
    fontWeight: 'bold',
  };

  const handleOnClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button 
      style={baseStyle}
      onClick={handleOnClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={buttonTextStyle}>{content}</p>
    </button>
  );
};
