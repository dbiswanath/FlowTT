// components/Header.js
import React from 'react';
import { Navbar, Nav } from 'reactstrap';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { MdOutlineLiveTv, MdCategory } from 'react-icons/md';
import logo from './logo.png'

const Header = () => (
  <Navbar dark expand="md" className="bg-dark px-4 justify-content-between">
    <div className="d-flex align-items-center gap-2">
      <img src={logo} alt="FlowTT Logo" style={{ height: '45px' }} />
    </div>
    <Nav className="ml-auto d-flex align-items-center gap-4">
      <a href="/home" className="nav-link text-warning fw-bold"><FaHome /> Home</a>
      <a href="/search" className="nav-link text-warning fw-bold"><FaSearch /> Search</a>
      <a href="/watchparty" className="nav-link text-warning fw-bold"><MdOutlineLiveTv /> Watch party</a>
      <a href="/categories" className="nav-link text-warning fw-bold"><MdCategory /> Categories</a>
      <a href="/login" className="nav-link text-warning fw-bold"><FaUser /> Login</a>
      <div className="nav-link dropdown text-warning fw-bold">English ▾</div>
    </Nav>
  </Navbar>
);

export default Header;
