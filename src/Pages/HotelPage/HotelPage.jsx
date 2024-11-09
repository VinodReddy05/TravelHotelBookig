import React, { useEffect, useState } from 'react';
import NavBar from "../../CommonPages/NavBar/NavBar";
import Header from "../../CommonPages/Header/Header";
import MailList from "../../CommonPages/MailList/MailList"
import Footer from "../../CommonPages/Footer/Footer"
import data from "../../../db.json";
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import '../../Pages/HotelPage/HotelPage.css';



const HotelPage = () => {
  const [slideNumber,setSlideNumber] = useState(0); 
  const [open,setOpen] = useState(false);
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    if (data && data.properties) {
      const hotelId = id;

      if (!isNaN(hotelId)) {
        console.log(`Looking for hotel with id: ${hotelId}`);

        const selectedHotel = data.properties.find(hotel => String(hotel.property.id) === hotelId);
        console.log('Selected hotel:', selectedHotel);

        if (selectedHotel) {
          setHotel(selectedHotel);
        }
        else {
          console.error("No matching hotel found");
        }
      }
      else {
        console.error("Invalid hotel ID: Not a number");
      }
    }
  }, [id]);

  const handleOpen =(imgIndex)=>{
    setSlideNumber(imgIndex)
    setOpen(true)
  };
  
const handleMove =(direction) =>{
  let newSliderNumber;
  if(direction === "l"){
    newSliderNumber =slideNumber ===0 ? 5 :slideNumber-1
  }else{
    newSliderNumber =slideNumber ===5 ? 0 :slideNumber+1
  }
  setSlideNumber(newSliderNumber)
}

const handleChange = () => {
  if (hotel) {
    navigate(`/booking/${hotel.property.id}`); 
  }
}



  return (
    <div>
      <NavBar />
      <Header type="list" />
      
      {hotel ? (

        <div className="hotelContainer">
          {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow slide' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
          <img src={hotel.property.img[slideNumber]} alt="Hotel" className="sliderImg" />

          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow2 slid' onClick={()=>handleMove("r")}/>


          </div>
          }

          
          <div className="hotelWrapper">
          <button className='bookNow' onClick={handleChange}>Book Now!</button>
            <h1 className='hotelTitle'>{hotel.property.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Distance from center: {hotel.property.distance_from_center}</span>
            </div>
            <span className="hotelDistance">Amenities: {hotel.property.amenities.join(', ')}</span>

            <div className="hotelImages">
              {hotel.property.img && hotel.property.img.map((image, imgIndex) => (
                <div className='hotelImgWrapper' key={imgIndex}>
                  <img onClick={()=>handleOpen(imgIndex)} src={image} alt={`Hotel ${imgIndex}`} className='hotelImg' />
                </div>
              ))}
            </div>

            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h3 className="hotelTitle">{hotel.property.description_Title}</h3>
                <p className="hotelDesc">{hotel.property.description}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h2>Perfect for a days-night stay</h2>
                <span> {hotel.pricing.total_cost} <b>per night</b></span>
                <button onClick={handleChange}>Book Now!</button>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>

        </div>

      ) : (
        <p>No hotel details available.</p>
      )}

    </div>
  );
};

export default HotelPage;
