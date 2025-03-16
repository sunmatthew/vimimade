import React, { useState } from 'react';
import { Size, textStyle } from '../text/shared';
import { Color } from '../../styles/color';

export const Button = ({
  content = '',
  color = '',
  textColor = '',
  size = 'medium', // 'small', 'medium', 'large'
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const padding =
    size === 'small'
      ? '10px 20px'
      : size === 'large'
        ? '20px 30px'
        : '20px 30px';

  const borderRadius =
    size === 'small' ? '20px' : size === 'large' ? '30px' : '30px';

  const baseStyle = {
    backgroundColor: color ? color : Color.WHITE,
    width: 'fit-content',
    padding: padding,
    border: 'none',
    borderRadius: borderRadius,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  const hoverStyle = {
    ...baseStyle,
    backgroundColor: Color.PRIMARY_INACTIVE,
  };

  const buttonTextStyle = {
    ...textStyle,
    fontSize:
      size === 'small'
        ? Size.BODY_SMALL
        : size === 'large'
          ? Size.BODY_LARGE
          : Size.BODY,
    color: textColor ? textColor : Color.BLACK,
    margin: 0,
    // fontWeight: 'bold',
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
