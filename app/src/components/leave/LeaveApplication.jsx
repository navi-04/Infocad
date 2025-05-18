import React, { useState } from 'react';
import { Card, Button, TextField, Select, Table } from '../ui';
import styles from './LeaveApplication.module.css';

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    startingDate: '',
    endingDate: '',
    hours: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave application submitted:', formData);
    // Add API call here
  };

  const leaveHistory = [
    { 
      id: 1, 
      dates: '20-01-2025 to 25-01-2025', 
      hours: 'Full Day(1,2,3,4,5,6,7)', 
      type: 'On Duty', 
      status: 'Approved' 
    },
    { 
      id: 2, 
      dates: '27-01-2025 to 31-01-2025', 
      hours: 'Full Day(1,2,3,4,5,6,7)', 
      type: 'On Duty', 
      status: 'Approved' 
    }
  ];

  return (
    <Card className={styles.leaveCard}>
      <div className={styles.cardHeader}>
        <h2>Apply OD & Leave</h2>
      </div>
      <div className={styles.viewTimetable}>
        <Button color="info" size="small">View Timetable</Button>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="type" className={styles.label}>Type :</label>
            <Select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              options={[
                { value: '', label: 'None' },
                { value: 'onDuty', label: 'On Duty' },
                { value: 'leave', label: 'Leave' }
              ]}
              fullWidth
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>Description/Reason :</label>
            <TextField
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="startingDate" className={styles.label}>Starting Date :</label>
            <TextField
              id="startingDate"
              name="startingDate"
              type="date"
              value={formData.startingDate}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="endingDate" className={styles.label}>Ending Date :</label>
            <TextField
              id="endingDate"
              name="endingDate"
              type="date"
              value={formData.endingDate}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="hours" className={styles.label}>Hour(s) :</label>
            <Select
              id="hours"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              options={[
                { value: '', label: 'None' },
                { value: 'fullDay', label: 'Full Day' },
                { value: 'hour1', label: 'Hour 1' },
                { value: 'hour2', label: 'Hour 2' }
              ]}
              fullWidth
            />
          </div>
          <div className={styles.submitButtonContainer}>
            <Button type="submit" color="primary">Submit</Button>
          </div>
        </div>
      </form>

      <Table
        headers={['S.No.', 'Date(s)', 'Hour(s)', 'Type', 'Approve Status']}
        data={leaveHistory.map(record => [
          record.id,
          record.dates,
          record.hours,
          record.type,
          <span className={`${styles.status} ${styles[record.status.toLowerCase()]}`}>
            {record.status}
          </span>
        ])}
        className={styles.leaveHistoryTable}
      />
    </Card>
  );
};

export default LeaveApplication;
