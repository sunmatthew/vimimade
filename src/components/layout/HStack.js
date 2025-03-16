import React from 'react';

export const HStack = ({
  id,
  children,
  gap = 0,
  alignItems = 'center',
  color = '',
  justifyContent = '',
  width = '',
  height = '',
  spacingHorizontal = 0,
  spacingBottom = 0,
  spacingTop = 0,
  marginHorizontal = 0,
  flexDirection = 'row',
}) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: flexDirection,
    gap: `${gap * 1}px`,
    backgroundColor: color ? color : 'transparent',
    alignItems: alignItems,
    justifyContent: justifyContent,
    width: width,
    height: height,
    paddingRight: spacingHorizontal,
    paddingLeft: spacingHorizontal,
    paddingTop: spacingTop,
    paddingBottom: spacingBottom,
    marginRight: marginHorizontal,
    marginLeft: marginHorizontal,
  };

  return (
    <div id={id} style={stackStyle}>
      {children}
    </div>
  );
};
