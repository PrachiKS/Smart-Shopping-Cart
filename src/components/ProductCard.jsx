import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  // Use optional chaining (?.) to prevent crashes if state.cart isn't loaded yet
  const cartItems = useSelector((state) => state.cart?.items || []);
  
  // Check if this specific product is already in the cart
  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    // We pass the product. When adding, the Reducer usually 
    // needs the name, price, and ID.
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = () => {
    // Consistency check: Ensure your removeItem reducer 
    // expects { id: number }
    dispatch(removeItem({ id: product.id }));
  };

  if (!product) return null;

  return (
    <div className="product-card">
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>

      <div className="product-actions">
        {isInCart ? (
          <button 
            className="remove-from-cart-btn" 
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;