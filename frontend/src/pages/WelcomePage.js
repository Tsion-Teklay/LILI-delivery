// 4. WelcomePage.js - Landing Page
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import '../styles/WelcomePage.css';

function WelcomePage() {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to Lili's Delivery</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default WelcomePage;