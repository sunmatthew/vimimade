import React from 'react';
import { Size, textStyle } from './shared';

export const TextBody = ({ children, variants = [], color, textAlign }) => {
  const style = {
    ...textStyle,
    fontSize: Size.BODY,
    fontWeight: variants.includes('bold') ? 'bold' : 'normal',
    textDecoration: variants.includes('underline') ? 'underline' : 'none',
    fontStyle: variants.includes('italic') ? 'italic' : 'normal',
    color: color,
    textAlign: textAlign,
    margin: 0,
    marginTop: '5px',
  };

  return <p style={style}>{children}</p>;
};
