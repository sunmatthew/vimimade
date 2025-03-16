import React from 'react';
import { FONTS } from '../../constants/fonts';
import { VStack } from '../layout';
import { TextBody } from './TextBody';
import { Color } from '../../styles/color';

export const TextInput = ({
  label,
  value,
  onChange,
  placeholder = '',
  error = '',
  type = 'text',
  width = '100%',
  textareaRows = 3,
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const containerStyle = {
    width: width,
    maxWidth: '100%',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: `2px solid ${error ? '#ff0000' : '#ccc'}`,
    borderRadius: '12px',
    outline: 'none',
    fontFamily: FONTS.PRIMARY,
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      {type === 'area' ? (
        <VStack>
          {label && (
            <TextBody color={Color.WHITE} variants={['bold']}>
              {label}
            </TextBody>
          )}
          <textarea
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            style={{ ...inputStyle, resize: 'vertical' }}
            rows={textareaRows}
          />
        </VStack>
      ) : (
        <VStack>
          {label && (
            <TextBody color={Color.WHITE} variants={['bold']}>
              {label}
            </TextBody>
          )}
          <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            style={inputStyle}
          />
        </VStack>
      )}
    </div>
  );
};
