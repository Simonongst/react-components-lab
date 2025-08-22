import './WeatherForecast.css';
import WeatherData from './WeatherData';

const WeatherForecast = ({ forecasts }) => {
  return (
    <>
      {forecasts.map((weather, index) => (
        <WeatherData
          key={index}
          day={weather.day}
          conditions={weather.conditions}
          time={weather.time}
          imgSrc={weather.img}
          imgAlt={weather.imgAlt}
        />
      ))}
    </>
  );
};

export default WeatherForecast;