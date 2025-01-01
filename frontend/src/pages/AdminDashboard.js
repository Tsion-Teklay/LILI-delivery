// 6. AdminDashboard.js
import React from 'react';
import ReportList from './ReportList';
import MenuList from '../components/MenuList';

function AdminDashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <MenuList />
      <ReportList />
    </div>
  );
}

export default AdminDashboard;