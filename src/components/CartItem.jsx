import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Guard clause to prevent crashing if item is undefined
  if (!item) return null;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    
    // Ensure we only dispatch if it's a valid number greater than 0
    if (!isNaN(value) && value > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: value }));
    }
  };

  const handleRemove = () => {
    // Note: Ensure your cartSlice.js expects an object { id } 
    // or just the ID directly. Usually: dispatch(removeItem(item.id))
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: {item.price} USD</p>
      
      <div className="quantity-controls">
        <label>Qty:</label>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <button className="remove-btn" onClick={handleRemove}>
        Remove
      </button>
      </div>
  );
};

export default CartItem;