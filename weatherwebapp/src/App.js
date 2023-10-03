import React, { useState, useEffect } from "react";
import './App.css';
import Card from './Components/Card';
import Image1 from './assets/images/Group 1.png'
import Image2 from './assets/images/Group 2.png'
import Image3 from './assets/images/Group 3.png'
import Image4 from './assets/images/Group 4.png'
import Image5 from './assets/images/Group 5.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useStateContext } from './Context/UseContext'

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typeListOpen, setTypeListOpen] = useState(false)
  const [degreeListOpen, setDegreeListOpen] = useState(false)
  const [weatherListOpen, setWeatherListOpen] = useState(false)
  const [marginTop, setMarginTop] = useState(140); // Initial margin-top
  const [searchInput, setSearchInput] = useState('');
  const [selectedType, setSelectedType] = useState('Coldest');
  const [selectedDegree, setSelectedDegree] = useState('10ºC - 20ºC');
  const [selectedWeather, setSelectedWeather] = useState('Rainy');

  const { weather, thisLocation, values, place, setPlace } = useStateContext()

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleTypeList = () => {
    setTypeListOpen(!typeListOpen);
  };
  const toggleDegreeList = () => {
    setDegreeListOpen(!degreeListOpen);
  };
  const toggleWeatherList = () => {
    setWeatherListOpen(!weatherListOpen);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    // Check if any list is open and update margin-top accordingly
    if (typeListOpen || degreeListOpen || weatherListOpen) {
      console.log(window.innerWidth)
      if (window.innerWidth > 1200) {
        setMarginTop(315);
      } else if (window.innerWidth = 1200) {
        setMarginTop(235);
      } else if (window.innerWidth = 992) {
        setMarginTop(190);
      } else if (window.innerWidth = 768) {
        setMarginTop(75);
      } else if (window.innerWidth = 567) {
        setMarginTop(160);
      }
    } else if(!typeListOpen || !degreeListOpen || !weatherListOpen) {
      if (window.innerWidth > 1200) {
        setMarginTop(140);
      } else if (window.innerWidth = 1200) {
        setMarginTop(100);
      } else if (window.innerWidth = 992) {
        setMarginTop(75);
      } else if (window.innerWidth = 768) {
        setMarginTop(180);
      } else if (window.innerWidth = 567) {
        setMarginTop(75);
      }
    }
  }, [typeListOpen, degreeListOpen, weatherListOpen]);

  const handleSearch = () => {
    setPlace(searchInput)
    setSearchInput('')
  };

  

  return (
    <section className="weather__app__section">
      <figure className="left__line__horizental">
        <img src={Image1} alt="" />
      </figure>
      <figure className="left__line__vertical">
        <img src={Image4} alt="" />
      </figure>
      <figure className="right__line__top">
        <img src={Image5} alt="" />
      </figure>
      <figure className="right__line__bottom">
        <img src={Image3} alt="" />
      </figure>
      <div className="container">
        <nav>
          <h1>CodWave Weather</h1>
          <ul className="nav__links">
            <li className={activeItem === 0 ? "active" : ""}
              onClick={() => handleItemClick(0)}><a href="#">Home</a>
            </li>
            <li className={activeItem === 1 ? "active" : ""}
              onClick={() => handleItemClick(1)}><a href="#">Download App</a>
            </li>
            <li className={activeItem === 2 ? "active" : ""}
              onClick={() => handleItemClick(2)}><a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="menu">
            <i id="menu" className="fa-solid fa-bars" onClick={toggleMenu} />
            <ul className={`nav__link ${menuOpen ? 'open' : ''}`} id="drobDown">
              <li className={activeItem === 0 ? "active" : ""}
                onClick={() => handleItemClick(0)}><a href="#">Home</a>
              </li>
              <li className={activeItem === 1 ? "active" : ""}
                onClick={() => handleItemClick(1)}><a href="#">Download App</a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}
                onClick={() => handleItemClick(2)}><a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <button>Sign Up</button>
        </nav>
        <div className="banner__text">
          <h2>Seeing the weather of the whole world</h2>
          <h2>with <span>CodWave Weather!</span></h2>
        </div>
        <div className="search__filter">
          <input
            type="text" name="search"
            placeholder="Search here"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <div className="filter">
            <h3>Filters</h3>
            <div className="type" onClick={toggleTypeList}>
              <p>Coldest</p>
              <i className="fa-solid fa-chevron-down" style={{ color: '#fff' }} />
            </div>
            <ul className={`type__list ${typeListOpen ? 'open' : ''}`}>
              <li>Coldest</li>
              <li>Hotest</li>
            </ul>
            <div className="degree" onClick={toggleDegreeList}>
              <p>10ºC - 20ºC</p>
              <i className="fa-solid fa-chevron-down" style={{ color: '#fff' }} />
            </div>
            <ul className={`degree__list ${degreeListOpen ? 'open' : ''}`}>
              <li>10ºC - 20ºC</li>
              <li>21ºC - 30ºC</li>
              <li>31ºC - 40ºC</li>
            </ul>
            <div className="weather" onClick={toggleWeatherList}>
              <p>Rainy</p>
              <i className="fa-solid fa-chevron-down" style={{ color: '#fff' }} />
            </div>
            <ul className={`weather__list ${weatherListOpen ? 'open' : ''}`}>
              <li>Rainy</li>
              <li>Cloudy</li>
              <li>Sunny</li>
            </ul>
          </div>
        </div>
        <div className="weather__cards" style={{ marginTop: `${marginTop}px` }}>
        {values.slice(0, 7).map((day, index) => (
        <Card
          key={index}
          place={thisLocation}
          date={day.datetimeStr}
          windspeed={day.wspd}
          humidity={day.humidity}
          temperature={day.temp}
          heatIndex={day.heatindex}
          iconString={day.conditions}
          conditions={day.conditions}
        />
      ))}
        </div>
      </div>
      <figure className="left__line__bottom">
        <img src={Image2} alt="" />
      </figure>
    </section>

  );
}

export default App;
