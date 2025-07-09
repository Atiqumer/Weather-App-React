import { useWeather } from "../context/Weather";

function CurrentWeather() {
  const { data } = useWeather();

  if (!data) return null;

  return (
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <h3>
          <strong>{data.location.name}, {data.location.country}</strong>
        </h3>

        <p className="mt-3">Current Time: {data.location.localtime}</p>
        <p>Chances of rain: {data.forecast?.forecastday[0]?.day?.daily_chance_of_rain || 0}%</p>
      </div>
      <div className="text-center">
        <img src={data.current.condition.icon} alt="icon" />
        <h2>{data.current.temp_c}°</h2>
        <p>{data.current.condition.text}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
