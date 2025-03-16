import React from 'react';
import { Size, textStyle } from './shared';

export const TextTitle = ({
  children,
  color,
  textAlign,
  letterSpacing,
  fontWeightOverride,
  sizeOverride,
  lineHeightOverride,
}) => {
  const style = {
    ...textStyle,
    fontWeight: fontWeightOverride ? fontWeightOverride : '500',
    fontSize: sizeOverride ? sizeOverride : Size.TITLE,
    color: color,
    margin: 0,
    textAlign: textAlign,
    letterSpacing: letterSpacing,
    lineHeight: lineHeightOverride ? lineHeightOverride : 1.4,
  };

  return <p style={style}>{children}</p>;
};
