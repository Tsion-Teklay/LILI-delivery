// 15. CartList.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import '../styles/Cart.css';

function CartList() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-list">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onRemove={removeFromCart} />
      ))}
    </div>
  );
}

export default CartList;