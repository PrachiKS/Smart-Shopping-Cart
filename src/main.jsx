import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import your global CSS here
import './index.css'; 
import './App.css';

/**
 * The 'root' ID must match the <div> in your index.html
 * Usually: <div id="root"></div>
 */
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Check your index.html!");
}