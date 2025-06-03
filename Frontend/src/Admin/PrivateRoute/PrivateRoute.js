import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Admin/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // If the user is not logged in, redirect to login page
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
