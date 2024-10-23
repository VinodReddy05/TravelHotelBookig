import React, { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/keys');
        if (!response.ok) throw new Error('Failed to fetch users');

        const data = await response.json();
        setUsers(data.users || []);
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Register users={users} setUsers={setUsers} />
      <Login users={users} />
      <ToastContainer />
    </div>
  );
};

export default Auth;
