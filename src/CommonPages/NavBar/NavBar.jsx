import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./NavBar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import UserProfile from '../Authentication/UserProfile';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleClickmenu = () => {
    setClick(!click);
  };

  const navigate = useNavigate();
  const handleClick = (page) => {
    setTimeout(() => {
      navigate(page);
    }, 600);
  };

  return (
    <nav>
      <div className="navContainer">
        <span><Link className="logo" to="/">Travel Booking</Link></span>
        <div className={`navlink ${click ? 'active' : ''}`}>
          {!token ? (
            <>
              <button className="navButton" onClick={() => handleClick('/signup')}>Register</button>
              <button className="navButton" onClick={() => handleClick('/login')}>Login</button>
            </>
          ) : (
            <UserProfile />
          )}
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
