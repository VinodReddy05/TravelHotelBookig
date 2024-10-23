import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../../db.json";
import { Link } from 'react-router-dom';
import List from '../../Pages/Lists/List';
import "./City.css"
import NavBar from '../NavBar/NavBar';

const City = () => {
  const { city } = useParams();  
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    console.log("Loaded properties:", data.properties);
    setApartments(data.properties);
  }, []);

  const filteredApartments = apartments.filter(property => 
    property.property && property.property.name && 
    city && 
    property.property.name.toLowerCase().includes(city.toLowerCase())
  );

  if (apartments.length === 0) {
    return <span>Loading apartments...</span>;
  }

  return (

    <>
    <div className='citySearch'>
    <NavBar/>

    </div>

    <div className='city-data'>

<h1>Available Apartments in {city}</h1>
{filteredApartments.length > 0 ? (
  <div className='city-card'>
    {filteredApartments.map((property, index) => (
      <div key={index}>
        <div className="searchItem1">
          <img src={property.property.image} alt={property.property.name} className='siImg1' />
          <div className="siDesc1">
            <h2 className='siTitle1'>{property.property.name}</h2>
            <span className='siDistance1'> {property.property.distance_from_center}</span>
            <span className='siAminity1'> {property.property.amenities.join(', ')}</span>
            <span className='siSubtitle1'> {property.apartment_details.type}</span>
            <span className='siFeatures1'> {property.apartment_details.features.area}</span>
            <span className='siCancleOp1'>{property.booking_options.cancellation_policy}**</span>
            <span className='siSpecialPrice1'>{property.booking_options.additional_note}</span>
          </div>

          <div className="siDetails1">
            <div className="siRating1">
              <span>{property.property.rating_description}</span>
              <button>{property.property.rating}</button>
            </div>
            <div className="siDetailText1">
              <span className='siprice1'> {property.pricing.total_cost} </span>
              <span className='siTaxiOp1'> ({property.pricing.includes})</span>

              <button className='siCheckButton1'>
                <Link to={`/hotels/${property.property.id}`} key={property.property.id}>See Availability</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
) : (
  <span>No apartments found for {city}</span>
)}
</div>
    </>
  );
};

export default City;
