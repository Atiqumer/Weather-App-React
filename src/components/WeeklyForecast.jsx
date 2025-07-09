import { useWeather } from "../context/Weather";

function WeeklyForecast() {
  const { data } = useWeather();

  if (!data) return null;

  return (
    <div>
      <h5 className="fw-bold ">Next 7-Day's Forecast</h5>
      <ul className="list-group list-group-flush">
        {data.forecast.forecastday.map((day, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="fw-semibold">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}</div>
            <div className="d-flex align-items-center gap-2">
              <img src={day.day.condition.icon} alt="icon" style={{ width: 32, height: 32 }} />
              <div >{day.day.condition.text}</div>
            </div>
            <div>
              {day.day.maxtemp_c}°/{day.day.mintemp_c}°
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeeklyForecast;
