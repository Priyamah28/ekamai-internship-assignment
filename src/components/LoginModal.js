// components/LoginModal.js
import React, { useState } from 'react';

const LoginModal = ({ onClose, onLogin, onSwitchToSignup }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials against a backend
    onLogin({
      name: 'John Doe', // This would come from the backend
      email: credentials.email
    });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Login to Your Account</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-options">
            <label className="checkbox">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          
          <button type="submit" className="btn btn-primary btn-full">Login</button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <a href="#" onClick={onSwitchToSignup}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;