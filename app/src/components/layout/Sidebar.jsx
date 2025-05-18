import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaUser, FaEdit, FaCalendarAlt, 
         FaFileAlt, FaCog, FaLock, FaComment, FaExclamationCircle } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = ({ collapsed }) => {
  const [studentMenuOpen, setStudentMenuOpen] = useState(true);

  const toggleStudentMenu = () => {
    setStudentMenuOpen(!studentMenuOpen);
  };

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.contactInfo}>
        For any Queries/Comments<br />
        mail to <a href="mailto:cams@mkce.ac.in">cams@mkce.ac.in</a>
      </div>
      
      <nav className={styles.navigation}>
        <div className={styles.navItem}>
          <button 
            className={`${styles.navButton} ${studentMenuOpen ? styles.active : ''}`} 
            onClick={toggleStudentMenu}
          >
            <FaUser className={styles.icon} />
            <span className={styles.navText}>Student</span>
            {studentMenuOpen ? <FaChevronDown className={styles.chevron} /> : <FaChevronRight className={styles.chevron} />}
          </button>
          
          {studentMenuOpen && (
            <div className={styles.subMenu}>
              <Link to="/cams-improvement" className={styles.subMenuItem}>
                <FaCog className={styles.icon} />
                <span>CAMS Improvement</span>
              </Link>
              <Link to="/change-password" className={styles.subMenuItem}>
                <FaLock className={styles.icon} />
                <span>Change Password</span>
              </Link>
              <Link to="/course-registration" className={styles.subMenuItem}>
                <FaEdit className={styles.icon} />
                <span>Course Registration</span>
              </Link>
              <Link to="/exam-application" className={styles.subMenuItem}>
                <FaFileAlt className={styles.icon} />
                <span>Exam Application</span>
              </Link>
              <Link to="/exam-timetable" className={styles.subMenuItem}>
                <FaCalendarAlt className={styles.icon} />
                <span>Exam Timetable</span>
              </Link>
              <Link to="/feedback-corner" className={styles.subMenuItem}>
                <FaComment className={styles.icon} />
                <span>Feedback Corner</span>
              </Link>
              <Link to="/non-academic-complaint" className={styles.subMenuItem}>
                <FaExclamationCircle className={styles.icon} />
                <span>Non Academic Complaint</span>
              </Link>
              <Link to="/student-corner" className={styles.subMenuItem}>
                <FaUser className={styles.icon} />
                <span>Student Corner</span>
              </Link>
              <Link to="/student-facility" className={styles.subMenuItem}>
                <FaCog className={styles.icon} />
                <span>Student Facility</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
