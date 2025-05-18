import React from 'react';
import LeaveApplication from '../components/leave/LeaveApplication';
import styles from './LeaveApplicationContainer.module.css';

const LeaveApplicationContainer = () => {
  const handleLeaveSubmit = (leaveData) => {
    // Here you would typically send the leave application data to an API
    console.log('Leave application submitted:', leaveData);
    alert('Your leave request has been submitted successfully!');
  };

  return (
    <div className={styles.container}>
      <LeaveApplication onSubmit={handleLeaveSubmit} />
    </div>
  );
};

export default LeaveApplicationContainer;
