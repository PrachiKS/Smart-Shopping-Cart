import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const handlePlaceOrder = () => {
    // Logic for processing payment would go here
    setIsOrdered(true);
    dispatch(clearCart());
    
    // Redirect home after a short delay
    setTimeout(() => navigate('/'), 3000);
  };

  if (isOrdered) {
    return (
      <div className="checkout-success">
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Your smart cart is now empty. Redirecting you home...</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="order-review">
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} className="checkout-row">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="checkout-total">
          <strong>Total to Pay: ${totalPrice.toFixed(2)}</strong>
        </div>
      </div>

      <button 
        className="place-order-btn" 
        onClick={handlePlaceOrder}
        disabled={cartItems.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;