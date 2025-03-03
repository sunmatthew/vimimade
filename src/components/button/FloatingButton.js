import React from 'react';

export const FloatingButton = ({
  icon,
  align = 'left', // 'left', 'right'
  isBottom = false,
  size = 'small', // 'small', 'large'
  onClick,
}) => {
  return (
    <div
      style={{
        padding: '20px',
        marginTop: isBottom ? 'auto' : 0,
        position: 'fixed',
        bottom: isBottom ? 0 : null,
        left: align === 'left' ? 0 : null,
        right: align === 'right' ? 0 : null,
        marginRight: '20px',
        cursor: 'pointer',
      }}
    >
      <img
        src={icon}
        width={size === 'small' ? '50px' : '100px'}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
