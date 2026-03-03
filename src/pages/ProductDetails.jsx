import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Added Link for navigation
import ProductCard from '../components/ProductCard';

const ProductDetails = ({ products = [] }) => {
  const { id } = useParams();
  
  // Find the product, ensuring both IDs are compared as the same type
  const product = products.find(p => String(p.id) === String(id));

  // Loading or Error State
  if (!product) {
    return (
      <div className="error-container">
        <h2>Product not found.</h2>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Link to="/" className="back-link">← Back to Shop</Link>
      
      <div className="details-layout">
        <section className="details-info">
          <h1>{product.name}</h1>
          <p className="product-category">{product.category || 'General'}</p>
          <p className="description">{product.description || 'No description available.'}</p>
          <p className="price"><strong>Price:</strong> ${product.price} USD</p>
        </section>

        <section className="details-action">
          {/* Reusing your ProductCard to handle the Redux Add/Remove logic */}
          <ProductCard product={product} />
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;