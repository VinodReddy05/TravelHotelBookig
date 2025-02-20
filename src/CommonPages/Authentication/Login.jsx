import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Circles from "react-loading-icons/dist/esm/components/circles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const base_url = "https://dummyserver-3kx2.onrender.com/users";

  // ✅ Validate Email & Password Before Submission
  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  // 🔥 Handle Login Function
  const handleLogin = async () => {
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please correct the errors and try again.");
      return;
    }

    setLoading(true);

    try {
      // ✅ Fetch users from database
      const { data } = await axios.get(base_url);
      console.log("Fetched users:", data); // Debugging: Check API response

      // ✅ Find matching user
      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        toast.error("Invalid credentials! Please check your email & password.");
        setLoading(false);
        return;
      }

      // ✅ Handle existing session (if user already logged in)
      const existingToken = localStorage.getItem("token");
      if (existingToken && existingToken !== user.id) {
        toast.warning(
          "User is logged in on another device. Logging out from the other device."
        );
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
      }

      // ✅ Store User Session & Redirect
      localStorage.setItem("token", user.id);
      localStorage.setItem("userEmail", user.email);
      toast.success("Login successful!");

      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
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
            {loading ? "Logging in..." : "Login"}
          </button>

          {loading && (
            <div className="loading-spinner">
              <Circles stroke="black" speed={0.75} width={50} />
            </div>
          )}
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
