import React from 'react';
import { Size, textStyle } from './shared';

export const TextTitle = ({ children, color, textAlign }) => {
  const style = {
    ...textStyle,
    fontWeight: '500',
    fontSize: Size.TITLE,
    color: color,
    margin: 0,
    textAlign: textAlign,
  };

  return <p style={style}>{children}</p>;
};
