import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./NavBar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import UserProfile from '../Authentication/UserProfile';

const NavBar = () => {
  const [click, setClick] = useState(false);
  
  const handleClickmenu = () => {
    setClick(!click);
  };

  const navigate = useNavigate();
  const handleClick = (page) => {
    // Optionally delay navigation
    setTimeout(() => {
        navigate(page);
    }, 600); // Delay of 600ms to match your transition duration
  };

  return (
    <nav>
     
      <div className="navContainer">
        <span><Link className="logo" to="/">Travel Booking</Link></span>
        <div className={`navlink ${click ? 'active' : ''}`}>
          <button className="navButton" onClick={() => handleClick('/signup')}>Register</button>
          <button className="navButton" onClick={() => handleClick('/login')}>Login</button>
          <UserProfile/>
        </div>
      </div>
      <div className="hamburger" onClick={handleClickmenu}>
        {click ? (
          <FaTimes style={{ color: 'white' }} size={25} />
        ) : (
          <FaBars style={{ color: 'white' }} size={25} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
