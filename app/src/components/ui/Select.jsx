import React from 'react';
import styles from './Select.module.css';

const Select = ({ 
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = '',
  fullWidth = false,
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`${styles.select} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
