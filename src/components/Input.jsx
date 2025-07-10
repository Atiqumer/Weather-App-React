import React, { useState, useEffect } from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (weather.searchCity.length < 1) return setSuggestions([]);

      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=af495e3c7ab340969c8145635250707&q=${weather.searchCity}`
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 100);
    return () => clearTimeout(debounce);
  }, [weather.searchCity]);

  const handleSelect = async (cityName) => {
    weather.setSearchCity(cityName);
    await weather.fetchData(cityName); 
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
      type="text" 
      className="form-control form-control-lg w-full px-4 py-2"
      placeholder="Enter City Name"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && weather.searchCity.trim() !== "") {
          weather.fetchWeatherData(weather.searchCity);
          setSuggestions([]);
    }
  }}
/>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 bg-white border mt-2 rounded shadow max-h-70 overflow-y-auto">
          {suggestions.map((city) => (
            <li
              key={`${city.name}-${city.country}`}
              className="px-4 py-2 hover:bg-blue-600"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelect(city.name)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
