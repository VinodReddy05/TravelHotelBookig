import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token and email from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    toast.success('Successfully logged out!');
    navigate('/login'); // Redirect to the login page
  };
  

  return (
    <button onClick={handleLogout} className="logoutbtn">
      Logout
    </button>
  );
};

export default Logout;
