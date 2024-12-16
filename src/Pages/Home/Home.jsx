import React, { useEffect } from 'react';
import "./Home.css";
import NavBar from '../../CommonPages/NavBar/NavBar';
import Header from '../../CommonPages/Header/Header';
import Featured from '../../CommonPages/featured/Featured';
import PropertyList from '../../CommonPages/propertyList/PropertyList';
import FeaturedProperty from '../../CommonPages/FeaturedPropperty/FeaturedProperty';
import MailList from '../../CommonPages/MailList/MailList';
import Footer from '../../CommonPages/Footer/Footer';
import axios from 'axios';
import MyAdComponent from '../../CommonPages/Ads/MyAdComponent';

const Home = () => {


  return (
    <div>
      <NavBar />
      <Header />
      <MyAdComponent/>
      <div className="homeContainer">
        <Featured />
        <h1 className='homeTitle'>Browse by the property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Home guests love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
