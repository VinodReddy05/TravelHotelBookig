import React from 'react'
import "./FeaturedProperty.css"


import special1 from '../../../assets/specialpic111.svg'
import specialpic5 from '../../../assets/specialpic5.svg'
import specialpic8 from '../../../assets/specialpic8.svg'
import specialpic12 from '../../../assets/specialpic12.svg'

const FeaturedProperty = () => {
  return (
    <div className='fp'>
    
    <div className='fpItem'> 
      <img src={special1} alt="" className="fpImg" />
      <span className="fpName"> Aparthotel Stare hotel</span>
      <span className="fpCity"> Sydney</span>
      <span className="fpPrice"> Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excelent</span>
      </div>
    </div>
     <div className='fpItem'> 
     <img src={specialpic5} alt="" className="fpImg" />
     <span className="fpName"> Aparthotel Stare hotel</span>
     <span className="fpCity"> New York</span>
     <span className="fpPrice"> Starting from $120</span>
     <div className="fpRating">
       <button>8.9</button>
       <span>Excelent</span>
     </div>
   </div>
    <div className='fpItem'> 
    <img src={specialpic8} alt="" className="fpImg" />
    <span className="fpName"> Aparthotel Stare hotel</span>
    <span className="fpCity"> London</span>
    <span className="fpPrice"> Starting from $120</span>
    <div className="fpRating">
      <button>8.9</button>
      <span>Excelent</span>
    </div>
  </div>
  <div className='fpItem'> 
    <img src={specialpic12} alt="" className="fpImg" />
    <span className="fpName"> Aparthotel Stare hotel</span>
    <span className="fpCity"> Tokyo</span>
    <span className="fpPrice"> Starting from $120</span>
    <div className="fpRating">
      <button>8.9</button>
      <span>Excelent</span>
    </div>
  </div>
  </div>
  )
}

export default FeaturedProperty
