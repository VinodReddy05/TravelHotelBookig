import React from 'react';
import "./MailList.css";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const MailList = () => {
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Show the toast message
    toast.success("Thank you for subscribing us!");

    // Scroll to the top after 3 seconds
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  };

  return (
    <div className='mail'>
      <h1 className="mailTitle">Save time, save money</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <form onSubmit={handleSubscribe}> {/* Add onSubmit handler */}
        <div className="mailInputContainer">
          <input type="email" placeholder='Your Email' required /> {/* Mark input as required */}
          <button type="submit">Subscribe</button> {/* Set button type to submit */}
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default MailList;
