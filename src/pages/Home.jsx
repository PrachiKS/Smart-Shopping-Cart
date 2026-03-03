import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import CartSummary from '../components/CartSummary';
import UserProfile from '../components/UserProfile'; // Added User Profile
import { UserContext } from '../context/UserContext';

const Home = ({ products = [] }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Smart Shopping Cart</h1>
        {user && <p>Welcome back, {user.username}!</p>}
      </header>

      <div className="main-content">
        {/* Left Side: Product Display */}
        <section className="product-section">
          <h2>Available Products</h2>
          {products.length === 0 ? (
            <p className="no-products">No products found. Please check back later.</p>
          ) : (
            <div className="product-list">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Right Side: Cart Summary & Profile Sidebar */}
        <aside className="sidebar">
          <UserProfile />
          <hr />
          <CartSummary />
        </aside>
      </div>
    </div>
  );
};

export default Home;