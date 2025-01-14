import React from 'react';

export const VStack = ({ 
  children, 
  gap = 0,  
  color='', 
  width,
  height, 
  justifyContent, 
  alignItems, 
  isPageContainer=false,
  spacingHorizontal=0,
  spacingBottom=0,
  spacingTop=0,
}) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap}px`,
    backgroundColor: color ? color :'transparent',
    width: width,
    height: isPageContainer ? '100vh' : height,
    justifyContent: justifyContent,
    alignItems: alignItems,
    paddingRight: spacingHorizontal,
    paddingLeft: spacingHorizontal,
    paddingTop: spacingTop,
    paddingBottom: spacingBottom,
  };

  return <div style={stackStyle}>{children}</div>;
};
