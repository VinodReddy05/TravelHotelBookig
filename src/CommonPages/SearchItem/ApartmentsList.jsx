
import React, { useEffect, useState } from 'react';
import data from "../../../db.json";
import "./SearchItem.css";
import { Link } from 'react-router-dom';

const ApartmentsList = ({ destination }) => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        setApartments(data.properties);
    }, []);

    // Optional: Filter apartments based on the selected destination
    const filteredApartments = apartments.filter(property => 
        property.property.name.toLowerCase().includes(destination.toLowerCase())
    );

    return (
        <div>
            <h1>Available Apartments</h1>
            {filteredApartments.length > 0 ? (
                <div>
                    {filteredApartments.map((property, index) => (
                        <div key={index}>
                            <div className="searchItem">
                                <img src={property.property.image} alt={property.property.name} className='siImg' />
                                <div className="siDesc">
                                    <h2 className='siTitle'>{property.property.name}</h2>
                                    <span className='siDistance'> {property.property.distance_from_center}</span>
                                    <span className='siAminity'> {property.property.amenities.join(', ')}</span>
                                    <span className='siSubtitle'> {property.apartment_details.type}</span>
                                    <span className='siFeatures'> {property.apartment_details.features.area}</span>
                                    <span className='siCancleOp'>{property.booking_options.cancellation_policy}**</span>
                                    <span className='siSpecialPrice'>{property.booking_options.additional_note}</span>
                                </div>

                                <div className="siDetails">
                                    <div className="siRating">
                                        <span>{property.property.rating_description}</span>
                                        <button>{property.property.rating}</button>
                                    </div>
                                    <div className="siDetailText">
                                        <span className='siprice'> {property.pricing.total_cost} </span>
                                        <span className='siTaxiOp'> ({property.pricing.includes})</span>

                                        <button className='siCheckButton'>
                                            <Link to={`/hotels/${property.property.id}`} key={property.property.id}>See Availability</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <span>Loading apartments...</span>
            )}
        </div>
    );
};

export default ApartmentsList;
