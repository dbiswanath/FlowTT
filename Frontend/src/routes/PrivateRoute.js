// src/routes/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Admin/AuthContext/AuthContext'; // adjust path if needed

const PrivateRoute = ({ children }) => {
  const { adminLoggedIn } = useAuth();

  if (!adminLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
