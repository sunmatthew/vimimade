import React from 'react';
import { Color } from '../../styles/color';

export const Navbar = ({
  children,
  color = Color.SECONDARY,
  gap = 0,
  align = 'left', // 'left', 'center', 'right'
  vSpacing = 0,
  textColor,
  isBottom = false,
  isFixed = false,
}) => {
  const gapStyle = `${gap * 32}px`;
  const justifyContent = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }[align];

  const childStyle = {
    margin: '0px 0px',
    color: textColor,
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: color,
        marginTop: isBottom ? 'auto' : 0, 
        position: isFixed ? 'fixed' : 'inherit',
        bottom: isBottom && isFixed ? 0 : null,
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: gapStyle,
          justifyContent: justifyContent,
          paddingTop: `${vSpacing * 2}px`,
          paddingBottom: `${vSpacing * 2}px`,
          margin: '0px 0px',
        }}
      >
        {React.Children.map(children, (child) => (
          <div style={childStyle}>{child}</div> // Apply child style
        ))}
      </nav>
    </div>
  );
};
