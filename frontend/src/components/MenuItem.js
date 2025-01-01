// 14. MenuItem.js
import React from 'react';
import '../styles/Menu.css';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default MenuItem;