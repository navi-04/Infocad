import React from 'react';
import styles from './Table.module.css';

const Table = ({ 
  headers = [], 
  data = [], 
  className = '',
  striped = true,
  bordered = true,
  hover = true
}) => {
  return (
    <div className={`${styles.tableContainer} ${className}`}>
      <table className={`${styles.table} ${striped ? styles.striped : ''} ${bordered ? styles.bordered : ''} ${hover ? styles.hover : ''}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
