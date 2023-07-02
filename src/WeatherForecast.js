import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `93d43dfe3b4a950e5b187e5dc313705e`;
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  https: axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>{" "}
          <WeatherIcon code="01d" size={50} />{" "}
          <div className="Forecast Temperatures">
            <span className="ForecastTemperature-max"> 19° </span>
            <span className="ForecastTemperature-min"> 10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
