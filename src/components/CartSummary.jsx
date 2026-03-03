import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  // Added a fallback to empty array to prevent "cannot read property reduce of undefined"
  const cartItems = useSelector((state) => state.cart.items) || [];

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  // Calculate total and fix decimal precision
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 
    0
  );

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <div className="summary-details">
        <p>Total Items: <strong>{totalItems}</strong></p>
        {/* .toFixed(2) ensures it looks like currency (e.g., 29.99) */}
        <p>Total Price: <strong>${totalPrice.toFixed(2)} USD</strong></p>
      </div>
      
      {/* Logic for a checkout button usually goes here */}
      {totalItems > 0 && (
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartSummary;