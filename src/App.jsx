import Input from "./components/Input";
import Button from "./components/Button";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import AirConditions from "./components/AirConditions";
import WeeklyForecast from "./components/WeeklyForecast";
import { useWeather } from "./context/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const weather = useWeather();

  return (
    <div className="container py-3">
      <div className="row mb-3">
        <div className="col">
          <Input />
        </div>
        <div className="col-md-5">
          <Button
            onClick={weather.fetchData}
            value="Search"
            className="btn btn-dark btn-lg btn-block"
          />
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-7">
          <div className="p-4 bg-white rounded shadow-sm">
            <CurrentWeather />
            <hr />
            <AirConditions />
            <hr />
            <HourlyForecast />
          </div>
        </div>

        <div className="col-md-5">
          <div className="p-4 bg-white rounded shadow-sm">
            <WeeklyForecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
