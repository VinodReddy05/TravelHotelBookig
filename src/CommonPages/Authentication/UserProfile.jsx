import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail'); // Retrieve email from local storage
  const userIcon = "https://via.placeholder.com/50"; // Example icon URL

  const handleLogout = () => {
    // Clear the token and email from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    
    toast.success('Successfully logged out!');
    navigate('/login'); // Redirect to the login page
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="user-profile">
      <div className="profile-container" onClick={toggleDropdown}>
        <FontAwesomeIcon className='user-icon' icon={faUser } fa-2x/>
        {/* <img src={userIcon} alt="User Icon" className="user-icon" /> */}
        <span className="user-email">{userEmail}</span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
