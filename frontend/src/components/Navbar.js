// 3. Navbar.js - Navigation Bar
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1>Lili's Delivery</h1>
      <div className="nav-links">
        {!user ? (
          <Link to="/">Login</Link>
        ) : (
          <>
            {user.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
            {user.role === 'driver' && <Link to="/driver">Driver Dashboard</Link>}
            {user.role === 'staff' && <Link to="/staff">Staff Dashboard</Link>}
            {user.role === 'customer' && <Link to="/customer">Customer Dashboard</Link>}
            <Link to="/reports">Reports</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;