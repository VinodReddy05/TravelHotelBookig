import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import './payment.css';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { setMainUser, setUsers, setActive } from '../../Redux/Slices/UserSlice'
import NavBar from '../../CommonPages/NavBar/NavBar';
import Header from '../../CommonPages/Header/Header';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

  const [isCardVisible, setIsCardVisible] = useState(false);
  const navigate = useNavigate()

  

  const dispatch = useDispatch()
  const isActive = useSelector(state => state.user.isActive)

 

  const [user, setuser] = useState({
    name: "",
    email: "",
    cardnumber: "",
     date:"",
     cvv:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();


    if (user.name && user.email && user.cardnumber &&user.date &&user.cvv) {
      dispatch(setMainUser(user))
      dispatch(setUsers(user))
      dispatch(setActive())
      setuser({
          name: "",
            email: "",
            cardnumber: "",
            date:"",
            cvv:""
        })
    
        toast.success("data successfully submited")
        setTimeout(() => {
          navigate('/')
        },3000);
        
       
       }else{
        toast.error("Enter valid Information")
    }
    
  }


  const toggleVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

    return (
<>
<NavBar />
<Header type="list"/>
<div className='payment_container'>

  <div className="payment">
    <div className="payDesc">
      <img src="https://media1.tenor.com/m/La2a94w882UAAAAC/sunexpress-sunexpress-airlines.gif" alt="booking tickets" className='payImg' />
      <h2>Enter Your Information</h2>
      <p>Make sure the information you have already written in your profile is correct.</p>
    </div>

    <form onSubmit={handleSubmit}>
      <div className='inputWithIcon'>
        <FontAwesomeIcon icon={faUser} className='inputIcon' />
        <input type="text" placeholder='Full Name' name="name" value={user.name} onChange={handleChange} />
      </div>

      <div className='inputWithIcon'>
        <FontAwesomeIcon icon={faEnvelope} className='inputIcon' />
        <input type="email" placeholder='Email' name="email" value={user.email} onChange={handleChange} />
      </div>

      <div className='inputWithIcon'>
        <FontAwesomeIcon icon={faLock} className='inputIcon' />
        <input  type={isCardVisible ? 'text' : 'password'} placeholder='Card Number' name="cardnumber" value={user.cardnumber}  maxLength="12" onChange={handleChange} />
        <FontAwesomeIcon
        icon={isCardVisible ? faEyeSlash : faEye}  
        className='inputIconRight'                
        onClick={toggleVisibility}                
      />
      </div>
      <div className='inputWithIcon'>
        <FontAwesomeIcon icon={faCalendarDays} className='inputIcon' />
        <input type="date" placeholder='' name="date" value={user.date} onChange={handleChange} />
      </div>
      <div className='inputWithIcon'>
        <FontAwesomeIcon icon={faLock} className='inputIcon' />
        <input type="password"  placeholder='cvv' name="cvv" value={user.cvv} maxLength="3"  pattern="\d{3}"  onChange={handleChange} />
      </div>

      <button type='submit' className='submitform' onClick={handleSubmit}>Submit</button>
    </form>

  </div>
  <ToastContainer />
</div>

</>
      
    );
  }


  export default Payment;
