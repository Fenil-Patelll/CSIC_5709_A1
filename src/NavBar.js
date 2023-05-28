import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          DalTank
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Alumni/Students
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            investors
          </Link>
        </li> 
        <li className="navbar-item">
          <Link to="/faq" className="navbar-link">
            FAQ
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            About Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Contact Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Login/SignUp
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
