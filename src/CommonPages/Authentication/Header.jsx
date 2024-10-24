import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './logout';
import UserProfile from './UserProfile'; 
const Header = () => {
  const token = localStorage.getItem('token');

  
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <UserProfile /> 
              </li>
              <li>
                <Logout />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
