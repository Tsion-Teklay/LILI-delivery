function CartItem({ item, updateQuantity, removeItem }) {
    return (
      <div className="cart-item">
        <div className="cart-item-details">
          <h4>{item.name}</h4>
          <p>Quantity: 
            <input 
              type="number" 
              value={item.quantity} 
              min="1"
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))} 
            />
          </p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
        <button className="remove-item" onClick={() => removeItem(item.id)}>
          &times;
        </button>
      </div>
    );
  }
  
  export default CartItem;