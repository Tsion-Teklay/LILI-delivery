// 19. UserProfile.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/UserProfile.css';

function UserProfile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default UserProfile;