import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail'); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    
    toast.success('Successfully logged out!');
    navigate('/login');  
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="user-profile">
      <div className="profile-container" onClick={toggleDropdown}>
        <FontAwesomeIcon className='user-icon' icon={faUser }/>
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
