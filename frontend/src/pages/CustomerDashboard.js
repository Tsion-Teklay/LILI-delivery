// 5. CustomerDashboard.js
import React from 'react';
import MenuList from '../components/MenuList';
import CartList from '../components/CartList';

function CustomerDashboard() {
  return (
    <div className="dashboard">
      <h1>Customer Dashboard</h1>
      <MenuList />
      <CartList />
    </div>
  );
}

export default CustomerDashboard;