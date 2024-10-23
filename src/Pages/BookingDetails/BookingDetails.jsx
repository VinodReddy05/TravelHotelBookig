import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import "./BookingDetails.css";
import { toast } from 'react-toastify';
import NavBar from '../../CommonPages/NavBar/NavBar';
import Header from '../../CommonPages/Header/Header';
import data from "../../../db.json";
import { useNavigate, useParams } from 'react-router-dom';

const BookingDetails = () => {
    const [hotel, setHotel] = useState(null);
    const navigate = useNavigate()
    const { id } = useParams();
    const bookingId = id;
    useEffect(() => {
      
        if (data && data.properties) {
            const hotelId = String(id);  
            const selectedHotel = data.properties.find(hotel => hotel.property && String(hotel.property.id) === hotelId);
      
            if (selectedHotel) {
                setHotel(selectedHotel);
            } else {
                console.error("No matching hotel found");
            }
        } else {
            console.error("Data not loaded or data structure is incorrect.");
        }
      }, [id]);
      
    

    const handleClick = () => {
        toast.success("Happy Booking! Have a nice day!");
        setTimeout(() => {
            navigate(`/booking/${bookingId}/payment`);
        }, 2000);

    };

    

    return (
        <>
            <NavBar />
            <Header type="list" />

            {hotel ? (
                <div className="booking">
                    <div className='bookingDetails'>
                        <div className="booking-info">
                            <h2>Payment Information</h2>
                            <p>Your Price Summary</p>

                            <div className="hotelImages">
                                {hotel.property.img && hotel.property.img.map((image, imgIndex) => (
                                    <div className='hotelImgWrapper' key={imgIndex}>
                                        <img src={image} alt={`Hotel ${imgIndex}`} className='hotelImg' />
                                    </div>
                                ))}
                            </div>
                            <span>Original Price</span>
                            <span>$960 for 4 nights</span>
                            <p>EasySet24 Loyalty Discount 4 %</p>
                            <span>$100 Discount</span>
                        </div>

                        <div className="booking-cancel">
                            <h2>Cancellation Policy</h2>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Free Cancellation</span>
                            </div>
                            <p>Cancel / Rebook No Later Than 24 Hours Before, Otherwise You Pay 80% Of The Cost.</p>
                            <span>Pay part now, part later</span>
                            <div className="checkbox-container">
                                <input type="checkbox" />
                                <p>Pay $200 now, and the rest ($660) will be automatically charged to the same payment method on August 27, 2023. No extra fees.</p>
                            </div>
                        </div>
                        <button className='paybtn' onClick={handleClick}>Pay for Booking</button>
                    </div>
                </div>
            ) : (
                <p>No hotel details available or no matching hotel found with the provided ID.</p>
            )}
        </>
    );
}

export default BookingDetails;
