import React from 'react';
import { Size, textStyle } from './shared';

export const TextBody = ({ children, variant = '' }) => {
  const style = {
    ...textStyle,
    fontWeight: '400',
    fontSize: Size.TITLE,
    fontWeight: variant.includes('bold') ? 'bold' : 'normal',
    textDecoration: variant.includes('underline') ? 'underline' : 'none',
    fontStyle: variant.includes('italic') ? 'italic' : 'normal',
  };

  return <p style={style}>{children}</p>;
};
