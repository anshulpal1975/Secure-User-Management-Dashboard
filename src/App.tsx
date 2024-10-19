import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Component/Auth';
import Registration from './Component/Registration';
import Welcome from './Component/Dashboard';
import AuthRoute from './Component/AuthRoute'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/welcome/:name" element={                   /* Protecting the Welcome route with AuthRoute */
          <AuthRoute>
            <Welcome />
          </AuthRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;

