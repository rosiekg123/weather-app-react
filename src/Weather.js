import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `93d43dfe3b4a950e5b187e5dc313705e`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="CitySearch">
      <form className="SearchEngine" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Seach for a City!"
          onChange={updateCity}
          autoFocus="on"
        />
        <button type="submit"> Search </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <br />
        <h1> {city}</h1>
        <ul>
          <li>
            {" "}
            <FormattedDate date={weather.date} />
          </li>
          <li> {weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-3">
            <div className="float-left">
              <br />
              <WeatherIcon code={weather.icon} size={90} />
              <WeatherTemperature celsius={weather.temperature} />
            </div>
          </div>

          <div className="col-3">
            <ul>
              <li> Wind: {Math.round(weather.wind)} km/h </li>
              <li>Humidity: {weather.humidity}% </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="forecast">
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
