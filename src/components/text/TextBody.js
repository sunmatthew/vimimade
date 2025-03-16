import React from 'react';
import { Size, textStyle } from './shared';

export const TextBody = ({
  children,
  variants = [],
  color,
  textAlign,
  error = false,
}) => {
  const style = {
    ...textStyle,
    fontSize: !error ? Size.BODY : Size.ERROR,
    fontWeight: variants.includes('bold') ? '400' : '300',
    textDecoration: variants.includes('underline') ? 'underline' : 'none',
    fontStyle: variants.includes('italic') ? 'italic' : 'normal',
    color: color,
    textAlign: textAlign,
    margin: 0,
    marginTop: '5px',
    lineHeight: '1.8',
  };

  return <p style={style}>{children}</p>;
};
