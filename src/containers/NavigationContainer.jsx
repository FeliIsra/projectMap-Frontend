import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginContainer from 'containers/LoginContainer';
import DashboardContainer from 'containers/DashboardContainer';

export const NavigationContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/dashboard" element={<DashboardContainer />} />
    </Routes>
  );
};
