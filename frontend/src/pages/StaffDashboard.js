// 8. StaffDashboard.js
import React from 'react';
import OrderList from '../components/OrderList';
import MenuList from '../components/MenuList';

function StaffDashboard() {
  return (
    <div className="dashboard">
      <h1>Staff Dashboard</h1>
      <OrderList />
      <MenuList />
    </div>
  );
}

export default StaffDashboard;