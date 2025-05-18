import React from 'react';
import CourseRegistration from '../components/course/CourseRegistration';
import styles from './CourseRegistrationContainer.module.css';

const CourseRegistrationContainer = () => {
  const studentData = {
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
    <div className={styles.container}>
      <CourseRegistration studentData={studentData} />
    </div>
  );
};

export default CourseRegistrationContainer;
