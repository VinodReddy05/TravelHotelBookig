// import React, { useState } from 'react';
// import './Login.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({}); 
//   const [loading, setLoading] = useState(false);

//   const base_url =import.meta.env.VITE_BASE_URL || 'http://localhost:3000/users';

//   const navigate=useNavigate()
//   // Email validation regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // Function to validate the form
//   const validateForm = () => {
//     const newErrors = {};
//     if (!name.trim()) newErrors.name = 'Name is required';
//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

//     return newErrors;
//   };

//   const registerHandle = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm(); 
//     setErrors(newErrors); 

//     if (Object.keys(newErrors).length > 0) {
//       toast.error('Please fill in the correct details.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const { data } = await axios.get(base_url);
//       const userExists = data.some((user) => user.email === email);

//       if (userExists) {
//         toast.warning('User already exists. Please use a different email.');
//         setName('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         return;
//       }

//       const newUser = { id: Date.now().toString(), name, email, password };
//       await axios.post(base_url, newUser);

//       toast.success('Registration successful!');
//       setTimeout(() => {
//         navigate("/login");
//     }, 2000);

     
//     } catch (error) {
//       console.error("Registration error:", error.response ? error.response.data : error.message);
//       toast.error('Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
// };




//   return (
//     <div className='authentication'>
//       <form onSubmit={registerHandle}>
//         <div className="register">
//           <h3>Register</h3>

//           <label>Name</label>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.name && <p className="error-message">{errors.name}</p>} {/* Error for name */}

//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <p className="error-message">{errors.email}</p>} {/* Error for email */}

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <p className="error-message">{errors.password}</p>} {/* Error for password */}

//           <label>Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>} {/* Error for confirm password */}

//           <p>Have an account? <Link to="/login">Login</Link></p>

//           <button type="submit" className="registerbtn" disabled={loading}  >
//             {loading ? 'Registering...' : 'Register'}

//           </button>
          
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const base_url = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/users';
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

  const registerHandle = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fill in the correct details.');
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.get(base_url);
      const userExists = data.some((user) => user.email === email);

      if (userExists) {
        toast.warning('User already exists. Please use a different email.');
        return;
      }

      const newUser = { id: Date.now().toString(), name, email, password };
      await axios.post(base_url, newUser);

      // Clear any existing token on registration
      localStorage.removeItem('token');

      toast.success('Registration successful!');
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error.response ? error.response.data : error.message);
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='authentication'>
      <form onSubmit={registerHandle}>
        <div className="register">
          <h3>Register</h3>

          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

          <p>Have an account? <Link to="/login">Login</Link></p>

          <button type="submit" className="registerbtn" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
