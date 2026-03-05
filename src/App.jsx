import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { UserProvider } from './context/UserContext';
import WatchImg from '../public/Assets/Watch-Img.jpg'

// Import Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';


// Sample Data for the Smart Shopping Cart
const products = [
  { id: 1, name: 'Smart Watch v2', price: 199, image: WatchImg,   description: 'Track your health and notifications with AI precision.', category: 'Electronics' },
  { id: 2, name: 'Bluetooth Earbuds', price: 89, description: 'Noise-canceling wireless earbuds with 24h battery life.', category: 'Audio' },
  { id: 3, name: 'Smart Scale', price: 45, description: 'Syncs weight and BMI data directly to your phone app.', category: 'Health' },
  { id: 4, name: 'RFID Wallet', price: 30, description: 'Protects your cards from digital theft with smart shielding.', category: 'Accessories' }
];

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
          <div className="App">
            {/* Simple Navigation Bar */}
            <nav className="navbar">
              <div className="nav-logo">
                <Link to="/">SmartCart AI</Link>
              </div>
              <ul className="nav-links">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </ul>
            </nav>

            {/* Main Routing Logic */}
            <main className="container">
              <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route 
                  path="/product/:id" 
                  element={<ProductDetails products={products} />} 
                />
                {/* Fallback for 404 */}
                <Route path="*" element={<h2>Page Not Found</h2>} />
              </Routes>
            </main>

            <footer className="footer">
              <p>&copy; 2026 Smart Shopping Cart Project</p>
            </footer>
          </div>
        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;
