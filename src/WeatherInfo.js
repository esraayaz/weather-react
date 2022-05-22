import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="toleft">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} site={52} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul className="toup">
            <li>
              <strong>Feels :</strong> {Math.round(props.data.feels_like)} °C
            </li>
            <li>
              <strong>Minimum :</strong> {Math.round(props.data.temp_min)} °C
            </li>
            <li>
              <strong>Maximum :</strong> {Math.round(props.data.temp_max)} °C
            </li>
            <li>
              <strong>Humidity :</strong> {props.data.humidity} %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
