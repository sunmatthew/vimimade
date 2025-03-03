import React from 'react';
import { FONTS } from '../../constants/fonts';

export const TextInput = ({
  value,
  onChange,
  placeholder = '',
  error = '',
  type = 'text',
  width = '100%',
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const inputStyle = {
    width: width,
    padding: '12px',
    fontSize: '16px',
    border: `2px solid ${error ? '#ff0000' : '#ccc'}`,
    borderRadius: '12px',
    outline: 'none',
    fontFamily: FONTS.PRIMARY,
  };

  return (
    <div style={{ width: '100%' }}>
      {type === 'area' ? (
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          style={{ ...inputStyle, resize: 'vertical' }}
          rows={3}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}
    </div>
  );
};
