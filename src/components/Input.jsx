import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();

  return (
    <input
      type="text"
      className="form-control form-control-lg"
      placeholder="Enter City Name"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
