import React from 'react';
import FeedbackForm from '../components/feedback/FeedbackForm';
import styles from './FeedbackContainer.module.css';

const FeedbackContainer = () => {
  const handleFeedbackSubmit = (feedbackData) => {
    // Here you would typically send the feedback data to an API
    console.log('Feedback submitted:', feedbackData);
    alert('Thank you for your feedback!');
  };

  return (
    <div className={styles.container}>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
    </div>
  );
};

export default FeedbackContainer;
