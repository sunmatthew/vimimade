import React from 'react';

export const VStack = ({ children, gap = 0 }) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap}px`,
  };

  return <div style={stackStyle}>{children}</div>;
};
