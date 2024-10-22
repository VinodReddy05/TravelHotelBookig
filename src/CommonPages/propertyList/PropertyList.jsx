import React from 'react';
import './propertyList.css';
import hotel from '../../../assets/hotel2.svg';
import appartment2 from '../../../assets/appartmnet2.svg';
import beach from '../../../assets/beach.svg';
import appartment from '../../../assets/appartment333.svg';
import resort from '../../../assets/resort.svg';

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src={hotel} alt="Hotel" className="pListimg" />
        <div className="pListTitles">
          <h2>Hotels</h2>
          <p>5 Hotels</p>
        </div>
      </div>

      <div className="pListItem">
        <img src={beach} alt="Beach" className="pListimg" />
        <div className="pListTitles">
          <h2>Beaches</h2>
          <p>5 Beaches</p>
        </div>
      </div>

      <div className="pListItem">
        <img src={appartment2} alt="Apartment" className="pListimg" />
        <div className="pListTitles">
          <h2>Appartments</h2>
          <p>5 Apartments</p>
        </div>
      </div>

      <div className="pListItem">
        <img src={appartment} alt="Apartment" className="pListimg" />
        <div className="pListTitles">
          <h2>Appartments</h2>
          <p>5 Appartments</p>
        </div>
      </div>

      <div className="pListItem">
        <img src={resort} alt="Resort" className="pListimg" />
        <div className="pListTitles">
          <h2>Resorts</h2>
          <p>5 Resorts</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
