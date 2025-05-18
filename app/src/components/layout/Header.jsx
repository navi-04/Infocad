import React from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.menuToggle} onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className={styles.logoSection}>
          <h1 className={styles.portalName}>CAMS Web Portal</h1>
        </div>
      </div>
      <div className={styles.middleSection}>
        <h2 className={styles.collegeName}>M.KUMARASAMY COLLEGE OF ENGINEERING, KARUR - 639 113</h2>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <span className={styles.userName}>NAVEENRAJ T</span>
          </div>
          <div className={styles.profileImage}>
            <img src="/assets/profile-placeholder.png" alt="User Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
