import React from 'react';
import styles from './TextField.module.css';

const TextField = ({ 
  id,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  label = '',
  fullWidth = false,
  required = false,
  disabled = false,
  multiline = false,
  rows = 4,
  className = '',
  ...props 
}) => {
  if (multiline) {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`${styles.textarea} ${fullWidth ? styles.fullWidth : ''} ${className}`}
        {...props}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={`${styles.input} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      {...props}
    />
  );
};

export default TextField;
