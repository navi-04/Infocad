import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
// import DashboardContainer from './containers/DashboardContainer';
import CourseRegistrationContainer from './containers/CourseRegistrationContainer';
import FeedbackContainer from './containers/FeedbackContainer';
import LeaveApplicationContainer from './containers/LeaveApplicationContainer';
import './App.css';

const App = () => {
  return (
    <Router> 
      <Layout>
        <Routes>
          {/* <Route path="/dashboard" element={<DashboardContainer />} />/ */}
          <Route path="/course-registration" element={<CourseRegistrationContainer />} />
          <Route path="/feedback-corner" element={<FeedbackContainer />} />
          <Route path="/leave-application" element={<LeaveApplicationContainer />} />
          {/* Redirect to dashboard if no path matches */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
