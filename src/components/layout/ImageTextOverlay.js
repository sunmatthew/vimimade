import React from 'react';

export const ImageTextOverlay = ({ imgSrc, textComponent, isSmallScreen }) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  const imgContainerStyle = {
    marginRight: '15px',
    marginLeft: '15px',
  };
  const textContainerStyle = {
    width: '100%',
    marginTop: '-30px',
  };
  return (
    <div style={stackStyle}>
      <div style={imgContainerStyle}>
        <img src={imgSrc} alt="image" style={{ width: '100%' }} />
      </div>
      <div style={textContainerStyle}>{textComponent}</div>
    </div>
  );
};
