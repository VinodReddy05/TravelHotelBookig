



import React from 'react';
import london from '../../../assets/london 1.svg'
import Newyork from '../../../assets/NewYorkpic 1.svg'
import Sydney from '../../../assets/sydney 1.svg'
import gothenburg from '../../../assets/Gothenburg.svg'
import Tokyo from '../../../assets/tokyo-japan 1.svg'
import './Featured.css';

import { useNavigate } from 'react-router-dom';

const Featured = () => {
  const navigate = useNavigate();

  const handleClick = (city) => {
    navigate(`/city/${city}`);
  };

  return (
    <div className='featured'>
      <div className="featureItem" onClick={() => handleClick("Gothenburg")}>
        <img className='featureImg' src={gothenburg} alt="gothenburg" />
        <div className="featureTitles">
          <h2>Gothenburg</h2>
        </div>
      </div>

      <div className="featureItem" onClick={() => handleClick("London")}>
        <img className='featureImg' src={london} alt="london" />
        <div className="featureTitles">
          <h2>London</h2>
        </div>
      </div>

      <div className="featureItem" onClick={() => handleClick("New York")}>
        <img className='featureImg' src={Newyork} alt="new york" />
        <div className="featureTitles">
          <h2>New York</h2>
        </div>
      </div>

      <div className="featureItem" onClick={() => handleClick("Sydney")}>
        <img className='featureImg' src={Sydney} alt="sydney" />
        <div className="featureTitles">
          <h2>Sydney</h2>
        </div>
      </div>

      <div className="featureItem" onClick={() => handleClick("Gothenburg")}>
        <img className='featureImg' src={gothenburg} alt="gothenburg" />
        <div className="featureTitles">
          <h2>Gothenburg</h2>
        </div>
      </div>


      <div className="featureItem" onClick={() => handleClick("Tokyo")}>
        <img className='featureImg' src={Tokyo} alt="tokyo" />
        <div className="featureTitles">
          <h2>Tokyo</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
