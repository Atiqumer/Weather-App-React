const baseURL =
  "https://api.weatherapi.com/v1/forecast.json?key=af495e3c7ab340969c8145635250707&&days=7";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};
