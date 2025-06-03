import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Custom hook to use Auth
export const useAuth = () => useContext(AuthContext);

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user@example.com', password: 'user123', role: 'user' },
  ]);

  // Load user from sessionStorage when app starts
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      sessionStorage.setItem('user', JSON.stringify(foundUser)); // Save to session
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  // Register function
  const register = (email, password) => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return false; // Email already exists
    }
    const newUser = { email, password, role: 'user' };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setUser(newUser);
    sessionStorage.setItem('user', JSON.stringify(newUser)); // Save new user to session
    return true;
  };

  // AuthContext value
  const authContextValue = {
    user,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
