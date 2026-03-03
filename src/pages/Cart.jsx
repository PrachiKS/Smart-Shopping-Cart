import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { clearCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button 
            className="clear-cart-btn" 
            onClick={() => dispatch(clearCart())}
          >
            Clear All Items
          </button>
        </div>
        
        <aside className="cart-sidebar">
          <CartSummary />
          <Link to="/checkout" className="checkout-link">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;