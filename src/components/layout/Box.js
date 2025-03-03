import React from 'react';

export const Box = ({
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
  isSmallScreen = false,
  defaultDirection = 'row',
  smallScreenDirection = 'column',
  smallScreenGap,
  smallScreenWidth,
  defaultWidth,
}) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: isSmallScreen ? smallScreenDirection : defaultDirection,
    gap: `${(isSmallScreen && smallScreenGap !== undefined ? smallScreenGap : gap) * 1}px`,
    backgroundColor: color ? color : 'transparent',
    alignItems: alignItems,
    justifyContent: justifyContent,
    width:
      isSmallScreen && smallScreenWidth
        ? smallScreenWidth
        : defaultWidth || width,
    height: height,
    paddingRight: spacingHorizontal,
    paddingLeft: spacingHorizontal,
    paddingTop: spacingTop,
    paddingBottom: spacingBottom,
  };

  return (
    <div id={id} style={stackStyle}>
      {children}
    </div>
  );
};
