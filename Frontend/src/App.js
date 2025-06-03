import React from 'react';
import {Routes, Route , useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './Containers/LoginPage/loginpage'
import SignUpPage from './Containers/SignupPage/SignUpPage';
import ForgotPassword from './Admin/ForgotPassword/ForgotPassword';
import AdminDashboard from './Admin/AdminDashboard/AdminDashboard';
import ReportsPage from './Admin/ReportsPage/ReportsPage';
import UserActivityPage from './Admin/UserActivityPage/UserActivityPage';
import VideoPerformancePage from './Admin/VideoPerformancePage/VideoPerformancePage';


function App() {
    const location = useLocation();
    const hideNavBarFooter = location.pathname.startsWith('/admin');
  return (
      <div className="app-container bg-dark text-light d-flex flex-column min-vh-100">
         {!hideNavBarFooter }
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/user-activity" element={<UserActivityPage/>} />
            <Route path="/video-performance" element={<VideoPerformancePage />} />
          </Routes>
        </main>
        
        {!hideNavBarFooter && <Footer />}
      </div>

  );
}

export default App;
