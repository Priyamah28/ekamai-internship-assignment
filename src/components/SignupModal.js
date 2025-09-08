// components/SignupModal.js
import React, { useState } from 'react';

const SignupModal = ({ onClose, onSignup, onSwitchToLogin }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and send data to backend
    onSignup({
      name: userData.name,
      email: userData.email
    });
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create an Account</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-options">
            <label className="checkbox">
              <input type="checkbox" required /> I agree to the Terms & Conditions
            </label>
          </div>
          
          <button type="submit" className="btn btn-primary btn-full">Create Account</button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <a href="#" onClick={onSwitchToLogin}>Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;