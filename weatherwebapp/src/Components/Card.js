import React from "react";
import '../App.css';
import Cloudy from '../assets/images/card/Group 3.png'
import Sunny from '../assets/images/card/Group 3 (1).png'
import Rainy from '../assets/images/card/Group 3 (2).png'
import Snow from '../assets/images/card/snowy.png'
function Card({
  place,
  date,
  windspeed,
  humidity,
  temperature,
  heatIndex,
  conditions,
  key
}) {
  const convertDate = new Date(date);
  const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = convertDate ? convertDate.toLocaleDateString('en-US', options) : ''

  let cardContent = null;
  if (conditions === 'Clear') {
    cardContent = (
      <div className="sunny__card__item">
        <figure>
          <img src={Sunny} alt="" />
        </figure>
        <div className="card__text">
          <h2>{place} {temperature}ºC</h2>
          <p>{formattedDate}</p>
          <p>Wind Speed: {windspeed}KM</p>
          <p>Weather: Clear</p>
        </div>
      </div>
    );
  } else if (conditions === 'Rainy') {
    cardContent = (
      <div className="rainy__card__item">
        <figure>
          <img src={Rainy} alt="" />
        </figure>
        <div className="card__text">
          <h2>{place} {temperature}ºC</h2>
          <p>{formattedDate}</p>
          <p>Wind Speed: {windspeed}KM</p>
          <p>Weather: Rainy</p>
        </div>
      </div>
    );
  } else if (conditions === 'Rain') {
    cardContent = (
      <div className="rainy__card__item">
        <figure>
          <img src={Rainy} alt="" />
        </figure>
        <div className="card__text">
          <h2>{place} {temperature}ºC</h2>
          <p>{formattedDate}</p>
          <p>Wind Speed: {windspeed}KM</p>
          <p>Weather: Rainy</p>
        </div>
      </div>
    );
  } else if (conditions === 'Partially cloudy') {
    cardContent = (
      <div className="cloudy__card__item">
        <figure>
          <img src={Cloudy} alt="" />
        </figure>
        <div className="card__text">
          <h2>{place} {temperature}ºC</h2>
          <p>{formattedDate}</p>
          <p>Wind Speed: {windspeed}KM</p>
          <p>Weather: Partially Cloudy</p>
        </div>
      </div>
    );
  } else if (conditions === 'Rain, Overcast') {
    cardContent = (
      <div className="rainy__card__item">
        <figure>
          <img src={Rainy} alt="" />
        </figure>
        <div className="card__text">
          <h2>{place} {temperature}ºC</h2>
          <p>{formattedDate}</p>
          <p>Wind Speed: {windspeed}KM</p>
          <p>Weather: Rain, Overcast</p>
        </div>
      </div>
    );
  } else if (conditions === 'Rain, Partially cloudy') {
    cardContent = (
      <div className="rainy__card__item">
        <figure>
          <img src={Rainy} alt="" />
        </figure>
        <div className="card__text">
          <h2>{place} {temperature}ºC</h2>
          <p>{formattedDate}</p>
          <p>Wind Speed: {windspeed}KM</p>
          <p>Weather: Rain, Partially cloudy</p>
        </div>
      </div>
    );
  } else if (conditions === 'Overcast') {
    cardContent = (
      <div className="rainy__card__item">
        <figure>
          <img src={Rainy} alt="" />
        </figure>
        <div className="card__text">
          <h2>{place} {temperature}ºC</h2>
          <p>{formattedDate}</p>
          <p>Wind Speed: {windspeed}KM</p>
          <p>Weather: Overcast</p>
        </div>
      </div>
    );
  }
  else if (conditions === 'Snow') {
    cardContent = (
      <div className="snow__card__item">
      <figure>
        <img src={Snow} alt="" />
      </figure>
      <div className="card__text">
        <h2>{place} {temperature}ºC</h2>
        <p>{formattedDate}</p>
        <p>Wind Speed: {windspeed}KM</p>
        <p>Weather: Snow</p>
      </div>
    </div>
    );
  }

  return cardContent
}

export default Card;