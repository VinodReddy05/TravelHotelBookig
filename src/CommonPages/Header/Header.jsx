import React, { useState } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS


const Header = ({type}) => {
  
  const[openDate, setOpenDate] = useState(false)
  const[destination, setDestination] = useState("")

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const[openOption, setOpenOption] = useState(false)
  const[options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
  });

  const navigate = useNavigate()

  const handleOption =(name, operation)=>{
    setOptions((prev) =>{
      return {
        ...prev,
        [name]:operation === "i" ? options[name] +1 : options[name] -1,
      };
    });
  };
  const handleSearch = () => {
    if (!destination) {
      toast.error("Please enter the location!"); 
    } else {
      navigate("./hotels", {state:{destination,date ,options}});
    }
  };




  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer" }>
        <div className="headerList">
        <div className="header22">
        <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
        </div>

          <div className="header33">
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>

          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxis</span>
          </div>
          </div>
        </div>

        {  type !== "list" &&
          <> <h1 className="headerTitle"> A Lifetime of discounts? It's Genius..!</h1>
        <p className="headerDesc">“You cannot discover new oceans until you have the courage to leave sight of the shore.”</p>
        <span>Take only memories, leave nothing but footprints: A quote that suggests you should take memories from your travels and leave footprints behind 
        </span>
     

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input type="text" placeholder='where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)} />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText' >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
           {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date} className='date'
              minDate={new Date()}
            />}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span onClick={()=>setOpenOption(!openOption)} className='headerSearchText' >{`${options.adult} adult  ${options.children} children  ${options.room} room  `}</span>
            {openOption && <div className="options">
              <div className="optionItem">
                <span className='optionText'>Adult</span>
                <div className="optionCounter">
                <button disabled={options.adult <=1} className="optionCounterbutton" onClick={()=>handleOption("adult", "d")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterbutton" onClick={()=>handleOption("adult", "i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className='optionText'>Children</span>
                 <div className="optionCounter">
                <button disabled={options.children <= 0} className="optionCounterbutton" onClick={()=>handleOption("children", "d")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterbutton" onClick={()=>handleOption("children", "i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className='optionText'>Room</span>
                <div className="optionCounter">
                <button disabled={options.room <=1} className="optionCounterbutton" onClick={()=>handleOption("room", "d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterbutton" onClick={()=>handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>search</button>
          </div>
        </div> </>}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Header
