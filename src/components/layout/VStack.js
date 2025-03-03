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
}) => {
  const pageContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    zIndex: -1,
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
  };

  if (isPageContainer) {
    stackStyle = { ...stackStyle, ...pageContainerStyle };
  }

  return <div style={stackStyle}>{children}</div>;
};
