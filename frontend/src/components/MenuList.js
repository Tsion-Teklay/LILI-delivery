// 13. MenuList.js
import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ menuItems }) {
  return (
    <div className="menu-list">
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;