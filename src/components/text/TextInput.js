import React from 'react';
import { TextBody } from './TextBody';

export const TextInput = ({
  value,
  onChange,
  placeholder = '',
  error = '',
  type = 'text',
//   color = 'black',
  textAlign = 'left',
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    outline: 'none',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '5px' }}>
      {type === 'area' ? (
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          style={{ ...inputStyle, resize: 'vertical' }}
          rows={10}
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
      {(error) && (
        <TextBody color="red" textAlign={textAlign} error> 
          {error}
        </TextBody>
      )}
    </div>
  );
};
