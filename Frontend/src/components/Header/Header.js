// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'reactstrap';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { MdOutlineLiveTv, MdCategory } from 'react-icons/md';
import './Header.css';

const Header = () => {
  return (
    <Navbar dark expand="md" className="bg px-4 py-2 justify-content-between sticky-top">
      <div className="d-flex align-items-center gap-2">
        <img src="/logo.png" alt="FlowTT Logo" style={{ height: '95px' }} />
      </div>
      <Nav className="d-flex align-items-center gap-4">
        <a href="/home" className="nav-link text-warning fw-bold d-flex align-items-center gap-1">
          <FaHome /> Home
        </a>
        <input placeholder='Search Here....' className='search'/>
        <a href="/watchparty" className="nav-link text-warning fw-bold d-flex align-items-center gap-1">
          <MdOutlineLiveTv /> Watch Party
        </a>
        <a href="/categories" className="nav-link text-warning fw-bold d-flex align-items-center gap-1">
          <MdCategory /> Categories
        </a>
        <a href="/" className="nav-link text-warning fw-bold d-flex align-items-center gap-1">
          <FaUser /> Login
        </a>
        <div className="nav-link text-warning fw-bold"><select className="select1">
            <option value="en-IN">English</option>
            <option value="hi-IN">हिन्दी</option>
          </select></div>
      </Nav>
    </Navbar>
  );
};

export default Header;
