const WeatherData = ({ day, conditions, time, imgSrc, imgAlt }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={imgSrc} alt={imgAlt}/>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
};

export default WeatherData;
