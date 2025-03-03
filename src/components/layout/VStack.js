import React from 'react';

export const VStack = ({
  children,
  gap = 0,
  color = '',
  width,
  height,
  justifyContent,
  alignItems,
  isPageContainer = false,
  spacingHorizontal = 0,
  spacingBottom = 0,
  spacingTop = 0,
  style,
}) => {
  const pageContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    minHeight: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    zIndex: -1,
    margin: 0,
  };

  let stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap}px`,
    backgroundColor: color ? color : 'transparent',
    width: width,
    height: height,
    justifyContent: justifyContent,
    alignItems: alignItems,
    paddingRight: spacingHorizontal,
    paddingLeft: spacingHorizontal,
    paddingTop: spacingTop,
    paddingBottom: spacingBottom,
    ...style,
  };

  if (isPageContainer) {
    stackStyle = {
      ...stackStyle,
      ...pageContainerStyle,
      width: '100%',
      maxWidth: '100vw',
    };
  }

  return <div style={stackStyle}>{children}</div>;
};
