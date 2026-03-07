import React, { createContext, useState } from 'react';

// 1. Create the Context
export const UserContext = createContext();

// 2. Create the Provider Component
export const UserProvider = ({ children }) => {
  // Hardcoded user info for development/testing
  const [user, setUser] = useState({
    username: 'Ram Prakash',
    email: 'Ram@example.com',
    address: '123 Main St, Delhi',
    isLoggedIn: true
  });

  // Helper function to update user data if needed
  const updateUser = (newData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newData
    }));
  };

  // Logout function to clear the user
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
