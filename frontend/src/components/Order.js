// 12. Order.js
import React from 'react';
import '../styles/Order.css';

function Order({ order }) {
  return (
    <div className="order">
      <h3>Order #{order.id}</h3>
      <p>Customer: {order.customerName}</p>
      <p>Total: ${order.total}</p>
      <p>Status: {order.status}</p>
    </div>
  );
}

export default Order;