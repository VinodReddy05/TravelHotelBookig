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

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:3000/keys", { key: "values" });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array to run only once

  return (
    <div>
      <NavBar />
      <Header />
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
