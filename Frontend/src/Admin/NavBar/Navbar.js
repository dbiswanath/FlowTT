import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';  
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import './index.css';
const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();  

  const handleLogout = () => {
    logout();  
    navigate('/'); 
  };
 
  return (
    <nav className="custom-navbar">
      <ul className="nav-links">
        <li><Link to="/admin" className="nav-item">Dashboard</Link></li>
        <li><Link to="/reports" className="nav-item">Reports</Link></li>
        <li><Link to="/user-activity" className="nav-item">User Activity</Link></li>
        <li><Link to="/video-performance" className="nav-item">Video Performance</Link></li>
        <li><Button className="logout-btn" onClick={handleLogout}>Logout</Button></li>
      </ul>
    </nav>
  );
}
export default NavBar

