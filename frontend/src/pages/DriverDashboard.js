// 7. DriverDashboard.js
import React from 'react';
import OrderList from '../components/OrderList';

function DriverDashboard() {
  return (
    <div className="dashboard">
      <h1>Driver Dashboard</h1>
      <OrderList />
    </div>
  );
}

export default DriverDashboard;