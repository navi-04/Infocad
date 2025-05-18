import React from 'react';
import styles from './CardTitle.module.css';

const CardTitle = ({ children, color = 'default' }) => {
  return (
    <div className={`${styles.cardTitle} ${styles[color]}`}>
      {children}
    </div>
  );
};

export default CardTitle;
