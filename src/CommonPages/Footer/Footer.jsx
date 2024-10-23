import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="fLists">
          <div className="fList">
            <h4 className="fListTitle">About Us</h4>
            <p className="fListItem">Our Story</p>
            <p className="fListItem">Work with us</p>
            <p className="fListItem">Press & media</p>
            <p className="fListItem">Privacy & Security</p>
          </div>
          <div className="fList">
            <h4 className="fListTitle">We Offer</h4>
            <p className="fListItem">Trip Sponsorship</p>
            <p className="fListItem">Last Minute Flights</p>
            <p className="fListItem">Best Deals</p>
            <p className="fListItem">AI-Driven Search</p>
          </div>
          <div className="fList">
            <h4 className="fListTitle">Headquarters</h4>
            <p className="fListItem">England</p>
            <p className="fListItem">France</p>
            <p className="fListItem">Canada</p>
            <p className="fListItem">Iceland</p>
          </div>
          <div className="fList">
            <h4 className="fListTitle">Travel Blogs</h4>
            <p className="fListItem">Bali Travel Guide</p>
            <p className="fListItem">Sri Lanka Travel Guide</p>
            <p className="fListItem">Peru Travel Guide</p>
            <p className="fListItem">Swiss Travel Guide</p>
          </div>
          <div className="fList">
            <h4 className="fListTitle">Activities</h4>
            <p className="fListItem">Tour Leading</p>
            <p className="fListItem">Cruising & Sailing</p>
            <p className="fListItem">Camping</p>
            <p className="fListItem">Kayaking</p>
          </div>
          <div className="fList">
            <h4 className="fListTitle">Service</h4>
            <p className="fListItem">Report Error</p>
            <p className="fListItem">Ask Online</p>
            <p className="fListItem">Travel Insurance</p>
          </div>
        </div>
      </div>
      <div className="fText">
        <p>Copyright © EasySet24 | "EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"</p>
      </div>
    </>
  );
};

export default Footer;
