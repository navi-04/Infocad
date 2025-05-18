import React, { useState } from 'react';
import { Card, Button, TextField, CardTitle } from '../ui';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Add API call here
  };

  return (
    <Card className={styles.feedbackCard}>
      <CardTitle color="primary">Complaints/Feedback about CAMS - Web Portal</CardTitle>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name :</label>
          <TextField
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Complaint/Feedback Description :</label>
          <TextField
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={6}
            fullWidth
          />
        </div>
        <div className={styles.formActions}>
          <Button type="submit" color="primary">Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
