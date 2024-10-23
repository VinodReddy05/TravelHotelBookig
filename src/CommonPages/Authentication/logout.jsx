import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    toast.success('Successfully logged out!');
    navigate('/login'); 
  };
  

  return (
    <button onClick={handleLogout} className="logoutbtn">
      Logout
    </button>
  );
};

export default Logout;
