// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const base_url = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/users';

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!password.trim()) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleLogin = async () => {
//     const newErrors = validateForm();
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) {
//       toast.error('Please correct the errors and try again.');
//       return;
//     }
  
//     setLoading(true);
//     try {
//       const { data } = await axios.get(base_url);
  
//       const user = data.find(user => user.email === email && user.password === password);
  
//       if (user) {
//         const token = user.id 
//         localStorage.setItem('token', token);
//         toast.success('Login successful!');
//         setTimeout(() => {
//           navigate("/");
//       }, 2000);
  


//       } else {
//         toast.error('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       toast.error('Failed to login. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="authentication">
//       <div className="register">
//         <h3>Login</h3>

//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           aria-label="Email"
//         />
//         {errors.email && <p className="error-message">{errors.email}</p>}

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           aria-label="Password"
//         />
//         {errors.password && <p className="error-message">{errors.password}</p>}

//         <p>
//           Don't have an account? <Link to={`/signup`}>Register</Link>
//         </p>

//         <button
//           onClick={handleLogin}
//           className="registerbtn"
//           disabled={loading || !email || !password}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>

//       <ToastContainer/>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import Circles from 'react-loading-icons/dist/esm/components/circles';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const base_url = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/users';

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!password.trim()) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleLogin = async () => {
//     const newErrors = validateForm();
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) {
//       toast.error('Please correct the errors and try again.');
//       return;
//     }
  
//     setLoading(true);
//     try {
//       const { data } = await axios.get(base_url);
//       const user = data.find(user => user.email === email && user.password === password);
  
//       // Check if user is already logged in
//       const existingToken = localStorage.getItem('token');
//       if (existingToken && existingToken !== user?.id) {
//         toast.error('User is already logged in from another device. Logging you out from the other device.');
//         // Simulate logout from the other device
//         localStorage.removeItem('token');
//         localStorage.removeItem('userEmail');
//       }
  
//       // Login logic
//       if (user) {
//         const token = user.id;
//         localStorage.setItem('token', token);
//         localStorage.setItem('userEmail', user.email); // Store email in local storage
//         toast.success('Login successful!');
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       } else {
//         toast.error('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       <Circles stroke='black' speed={0.5} width={10}/>
//       toast.error('Failed to login. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <div className="authentication">
//       <div className="register">
//         <h3>Login</h3>

//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           aria-label="Email"
//         />
//         {errors.email && <p className="error-message">{errors.email}</p>}

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           aria-label="Password"
//         />
//         {errors.password && <p className="error-message">{errors.password}</p>}

//         <p>
//           Don't have an account? <Link to={`/signup`}>Register</Link>
//         </p>

//         <button
//           onClick={handleLogin}
//           className="registerbtn"
//           disabled={loading || !email || !password}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Circles from 'react-loading-icons/dist/esm/components/circles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const base_url = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/users';

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleLogin = async () => {
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error('Please correct the errors and try again.');
      return;
    }

    setLoading(true);
    const MINIMUM_LOADING_TIME = 2000; // Minimum time to show spinner (2 seconds)
    const startTime = Date.now();

    try {
      const { data } = await axios.get(base_url);
      const user = data.find(user => user.email === email && user.password === password);

      const existingToken = localStorage.getItem('token');
      if (existingToken && existingToken !== user?.id) {
        toast.error('User is already logged in from another device. Logging you out from the other device.');
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
      }

      if (user) {
        const token = user.id;
        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', user.email);
        toast.success('Login successful!');

        // Ensure the spinner stays visible for at least MINIMUM_LOADING_TIME
        const elapsedTime = Date.now() - startTime;
        const remainingTime = MINIMUM_LOADING_TIME - elapsedTime;

        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, remainingTime > 0 ? remainingTime : 0);
      } else {
        toast.error('Invalid credentials');
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to login. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="authentication">
      <div className="register">
        <h3>Login</h3>

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <p>
          Don't have an account? <Link to={`/signup`}>Register</Link>
        </p>

        <button
          onClick={handleLogin}
          className="registerbtn"
          disabled={loading || !email || !password}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {/* Conditionally render the Circles spinner based on the loading state */}
        {loading && (
          <div className="loading-spinner">
            <Circles stroke="black" speed={0.75} width={50} />
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
