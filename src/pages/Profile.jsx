import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserProfile from '../components/UserProfile';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="profile-page">
      <Link to="/">← Back to Shopping</Link>
      <h1>My Account</h1>
      
      {/* Reusing the UserProfile component we refined earlier */}
      <UserProfile />

      {user && (
        <div className="profile-actions">
          <button onClick={logout} className="logout-btn">
            Logout from Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;