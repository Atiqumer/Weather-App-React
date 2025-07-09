import { useWeather } from "../context/Weather";

function AirConditions() {
  const { data } = useWeather();

  if (!data) return null;

  const { feelslike_c, wind_kph, humidity, cloud } = data.current;

  return (
    <div>
      <h5>Air Conditions</h5>
      <div className="row text-center">
        <div className="col">
          <p>🌡️ Real Feel</p>
          <strong>{feelslike_c}°</strong>
        </div>
        <div className="col">
          <p>💨 Wind</p>
          <strong>{wind_kph} km/h</strong>
        </div>
        <div className="col">
          <p>💧 Humidity</p>
          <strong>{humidity}%</strong>
        </div>
        <div className="col">
          <p>☁️ Cloud</p>
          <strong>{cloud}</strong>
        </div>
      </div>
    </div>
  );
}

export default AirConditions;
