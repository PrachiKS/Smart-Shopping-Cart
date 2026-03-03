import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user, loading } = useContext(UserContext);

  // Handle the state where data is still being fetched
  if (loading) {
    return <div className="user-profile">Loading profile...</div>;
  }

  // Handle the guest state
  if (!user) {
    return (
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>Please log in to view your profile and saved addresses.</p>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Fallback if address isn't set yet */}
        <p><strong>Address:</strong> {user.address || "No address provided"}</p>
      </div>
      
      {/* Pro-tip: Add an Edit button here later */}
      <button className="edit-profile-btn">Edit Details</button>
    </div>
  );
};

export default UserProfile;