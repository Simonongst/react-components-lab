// src/App.jsx
import WeatherForecast from './components/WeatherForecast';
import weatherForecasts from './components/WeatherForecastData.js';

const App = () => {

  return (
    <>
      <h1>Local Weather</h1>
      <section className='weather'>
        <WeatherForecast forecasts={weatherForecasts} />
      </section>
    </>
  );
}

export default App;
