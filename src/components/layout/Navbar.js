import React from 'react';
import { Color } from '../../styles/color';

export const Navbar = ({
  children,
  color = Color.PRIMARY,
  gap = 0,
  align = 'left', // 'left', 'center', 'right'
  vSpacing = 0,
}) => {
  const gapStyle = `${gap * 32}px`;
  const justifyContent = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }[align];

  const childStyle = {
    margin: '0px 0px',
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: color,
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: gapStyle,
          justifyContent: justifyContent,
          width: '80%',
          paddingTop: `${vSpacing * 2}px`, // Vertical margin (top)
          paddingBottom: `${vSpacing * 2}px`, // Vertical margin (bottom)
        }}
      >
        {React.Children.map(children, (child) => (
          <div style={childStyle}>{child}</div> // Apply child style
        ))}
      </nav>
    </div>
  );
};
