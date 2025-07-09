import { useWeather } from "../context/Weather";

function HourlyForecast() {
  const { data } = useWeather();

  if (!data) return null;
  
 const currentTime = new Date(data.location.localtime);
const hours = [...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour]
  .filter(hour => new Date(hour.time) >= currentTime)
  .slice(0, 12);


  return (
    <div>
      <h5>Today's Forecast</h5>
      <div className="d-flex gap-3 overflow-auto">
        {hours.map((hour, index) => (
          <div key={index} className="text-center p-2 rounded bg-light">
            <p>{new Date(hour.time).toLocaleTimeString([], { hour: 'numeric', hour12: true })}</p>
            <img src={hour.condition.icon} alt="icon" />
            <p>{hour.temp_c}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
