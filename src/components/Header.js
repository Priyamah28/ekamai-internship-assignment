import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Link to="/" className="logo">Magic<span>Bricks</span></Link>
          <div className="user-actions">
            {user ? (
              <div className="user-welcome">
                <span>Welcome, {user.name}</span>
                <button className="btn btn-logout" onClick={onLogout}>Logout</button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-login">
                  <i className="fas fa-user"></i> Login
                </Link>
                <Link to="/signup" className="btn btn-signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
        
        <div className="header-nav">
          <nav className="main-nav">
            <Link to="/properties" className="nav-link">
              <i className="fas fa-home"></i> Buy
            </Link>
            <Link to="/properties?type=rent" className="nav-link">
              <i className="fas fa-key"></i> Rent
            </Link>
            <Link to="/sell" className="nav-link">
              <i className="fas fa-dollar-sign"></i> Sell
            </Link>
            <Link to="/homeloans" className="nav-link">
              <i className="fas fa-file-invoice-dollar"></i> Home Loans
            </Link>
            <Link to="/agents" className="nav-link">
              <i className="fas fa-users"></i> Agents
            </Link>
            <Link to="/blog" className="nav-link">
              <i className="fas fa-blog"></i> Blog
            </Link>
          </nav>
          
          <div className="search-box">
            <input type="text" placeholder="Search properties, locations..." />
            <button className="search-btn"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;