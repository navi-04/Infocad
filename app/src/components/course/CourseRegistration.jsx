import React from 'react';
import { Card, Table, Button } from '../ui';
import styles from './CourseRegistration.module.css';

const CourseRegistration = ({ studentData }) => {
  // Default data if not provided through props
  const data = studentData || {
    registerNo: '927623BCS068',
    name: 'NAVEENRAJ T',
    batch: '2023-2027',
    department: 'B.E.(Computer Science and Engineering)',
    dateOfBirth: '04-11-2005',
    section: 'B',
    semester: '4',
    classCommencement: '06-01-2025 00:00:01 AM',
    lastWorkingDay: '29-05-2025 11:59:59 PM',
    attendanceRecords: [
      {
        id: 1, 
        facilityName: 'Section Attendance', 
        batch: '2023-2027', 
        semester: '2',
        startingDate: '14-02-2024 00:00:01 AM', 
        endingDate: '15-06-2024 11:59:59 PM'
      },
      {
        id: 2, 
        facilityName: 'Section Attendance', 
        batch: '2023-2027', 
        semester: '3',
        startingDate: '22-07-2024 00:00:01 AM', 
        endingDate: '29-11-2024 11:59:59 PM'
      },
      {
        id: 3, 
        facilityName: 'Section Attendance', 
        batch: '2023-2027', 
        semester: '4',
        startingDate: '06-01-2025 00:00:01 AM', 
        endingDate: '29-05-2025 11:59:59 PM'
      }
    ]
  };

  return (
    <div className={styles.courseRegistration}>
      <Card className={styles.studentInfoCard}>
        <div className={styles.cardHeader}>
          <h2>Student Course Registration</h2>
        </div>
        <div className={styles.studentInfo}>
          <div className={styles.infoColumn}>
            <div className={styles.infoRow}>
              <span className={styles.label}>Register No. :</span>
              <span className={styles.value}>{data.registerNo}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Batch :</span>
              <span className={styles.value}>{data.batch}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Date of Birth :</span>
              <span className={styles.value}>{data.dateOfBirth}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Semester :</span>
              <span className={styles.value}>{data.semester}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Class Commencement from :</span>
              <span className={styles.value}>{data.classCommencement}</span>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoRow}>
              <span className={styles.label}>Name :</span>
              <span className={styles.value}>{data.name}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Department :</span>
              <span className={styles.value}>{data.department}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Section :</span>
              <span className={styles.value}>{data.section}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Last Working Day :</span>
              <span className={styles.value}>{data.lastWorkingDay}</span>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <Button color="primary">Change Semester</Button>
          <Button color="secondary">Download Student Timetable</Button>
        </div>
        
        <Table
          headers={['S.No.', 'Facility Name', 'Batch', 'Semester', 'Starting Date', 'Ending Date', 'Action']}
          data={data.attendanceRecords.map((record, index) => [
            record.id,
            record.facilityName,
            record.batch,
            record.semester,
            record.startingDate,
            record.endingDate,
            <Button key={index} color="info" size="small">View</Button>
          ])}
          className={styles.attendanceTable}
        />
      </Card>
    </div>
  );
};

export default CourseRegistration;
