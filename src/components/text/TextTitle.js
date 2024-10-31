import React from 'react';
import { Size, textStyle } from './shared';

export const TextTitle = ({ children }) => {
  const style = {
    ...textStyle,
    fontWeight: '700',
    fontSize: Size.TITLE,
  };

  return <p style={style}>{children}</p>;
};
