import React, { useState } from 'react';
import Header from '../../CommonPages/Header/Header';
import NavBar from '../../CommonPages/NavBar/NavBar';
import './List.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import ApartmentsList from '../../CommonPages/SearchItem/ApartmentsList';

const locationsList = ['Sydney', 'Gothenburg', 'Manhattan', 'London', 'New York'];

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state?.destination || '');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state?.date || [{
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
  }]);
  const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0, room: 1 });
  const [suggestions, setSuggestions] = useState([]);

  const handleDestinationChange = (e) => {
      const value = e.target.value;
      setDestination(value);

  };

  return (
      <div>
          <NavBar />
          <Header type="list" />
          <div className="listContainer">
              <div className="listwrapper">
                  <div className="listSearch">
                      <h1 className="lsTitle">Search</h1>
                      <div className="lsItem">
                          <label>Destination</label>
                          <input
                              type="text"
                              value={destination}
                              onChange={handleDestinationChange}
                              placeholder="Enter destination"
                          />
                          {suggestions.length > 0 && (
                              <ul className="suggestions">
                                  {suggestions.map((suggestion, index) => (
                                      <li
                                          key={index}
                                          onClick={() => handleSuggestionClick(suggestion)}
                                      >
                                          {suggestion}
                                      </li>
                                  ))}
                              </ul>
                          )}
                      </div>

                      <div className="lsItem">
                          <label>Check-in Date</label>
                          <span
                              onClick={() => setOpenDate(!openDate)}
                              style={{ cursor: 'pointer', color: 'blue' }}
                          >
                              {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                          </span>
                          {openDate && (
                              <DateRange
                                  onChange={(item) => setDate([item.selection])}
                                  minDate={new Date()}
                                  ranges={date}
                              />
                          )}
                      </div>

                      <div className="lsItem">
                          <label>Options</label>
                          <div className="lsOptions">
                              <div className="lsOptionItem">
                                  <span className="lsOptionText">Min price <small>per night</small></span>
                                  <input type="text" className="lsOptionInput" />
                              </div>

                              <div className="lsOptionItem">
                                  <span className="lsOptionText">Max price <small>per night</small></span>
                                  <input type="text" className="lsOptionInput" />
                              </div>

                              <div className="lsOptionItem">
                                  <span className="lsOptionText">Adult</span>
                                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                              </div>

                              <div className="lsOptionItem">
                                  <span className="lsOptionText">Children</span>
                                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                              </div>

                              <div className="lsOptionItem">
                                  <span className="lsOptionText">Room</span>
                                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                              </div>
                          </div>
                      </div>
                      <button className='listbtn'>Search</button>
                  </div>
                  <div className="listResult">
                      <ApartmentsList destination={destination} />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default List;

