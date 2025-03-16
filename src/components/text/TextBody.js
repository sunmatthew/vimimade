import React from 'react';
import { Size, textStyle } from './shared';

export const TextBody = ({
  children,
  variants = [],
  color,
  textAlign,
  error = false,
  size = Size.BODY,
  letterSpacing,
}) => {
  let fontWeight = 400;
  if (variants.includes('super-bold')) {
    fontWeight = 600;
  } else if (variants.includes('bold')) {
    fontWeight = 500;
  }

  const style = {
    ...textStyle,
    fontSize: !error ? size : Size.ERROR,
    fontWeight,
    textDecoration: variants.includes('underline') ? 'underline' : 'none',
    fontStyle: variants.includes('italic') ? 'italic' : 'normal',
    color: color,
    textAlign: textAlign,
    margin: 0,
    marginTop: '5px',
    lineHeight: '1.8',
    letterSpacing,
  };

  return <p style={style}>{children}</p>;
};
