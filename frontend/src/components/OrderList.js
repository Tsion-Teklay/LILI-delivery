// 11. OrderList.js
import React from 'react';
import Order from './Order';

function OrderList({ orders }) {
  return (
    <div className="order-list">
      <h2>Orders</h2>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;