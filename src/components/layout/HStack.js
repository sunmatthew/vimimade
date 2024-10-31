import React from 'react';

export const HStack = ({ children, gap = 0 }) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: 'row', // Horizontal stacking
    gap: `${gap * 1}px`,   
  };

  return <div style={stackStyle}>{children}</div>;
};
