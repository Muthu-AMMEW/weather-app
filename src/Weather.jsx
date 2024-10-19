import './Weather.css';
import WeatherDetails from './WeatherDetails';
import { useState, useEffect } from "react";
// import axios from 'axios'

// pictures

import p01d from './pictures/clear_sky.png';
import p01n from './pictures/clear_sky_n.png';
import p02d from './pictures/few_clouds.png';
import p02n from './pictures/few_clouds_n.png';
import p03 from './pictures/scattered_clouds.png';
import p04 from './pictures/broken_clouds.png';
import p09 from './pictures/shower_rain.png';
import p10 from './pictures/rain.png';
import p11 from './pictures/thunderstorm.png';
import p13 from './pictures/snow.png';
import p50 from './pictures/mist.png';


export default function Weather() {
  let api_key = "65c822b9325bd0e825e02960d44c7452";
  const [text, setText] = useState("Chennai");
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const weatherIconMap = {

    "0ld": p01d,
    "01n": p01n,
    "02d": p02d,
    "02n": p02n,
    "03d": p03,
    "03n": p03,
    "04d": p04,
    "04n": p04,
    "09d": p09,
    "09n": p09,
    "10d": p10,
    "10n": p10,
    "11d": p11,
    "11n": p11,
    "13d": p13,
    "13n": p13,
    "50d": p50,
    "50n": p50,
  };

  async function search() {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      
      if (data.cod === "404") {
        console.error("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode]);
      setCityNotFound(false);
    } catch (error) {
      console.error("An error occurred:", error.message);
      setError("An error occurred while fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(function () {
    search();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="row min-vw-100 min-vh-100 justify-content-center align-items-center bg-info-subtle bg-image">
        <div className="col-11 col-sm-8 col-md-7 col-lg-6 col-xl-5">
          
          <div className="bg-white d-flex flex-column justify-content-center align-items-center w-100 rounded-5">

          <div className='text-center text-success h2 mt-2'>Weather Report</div>

            <div className="d-flex form-control border-danger w-75 m-3">
              <input className="mm-inputfocus flex-grow-1 border-0" type="text" id="" placeholder="Enter City Name" onChange={e => setText(e.target.value)} value={text} onKeyDown={handleKeyDown} />
              <i className="bi bi-search" onClick={() => search()}></i>
            </div>


            {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />}
            {loading && <div className="p-5 text-warning m-2 h5">Loading...</div>}
            {error && <div className="p-5 text-warning m-2 h5">{error}</div>}
            {cityNotFound && <div className="p-5 text-warning m-2 h5">City not found</div>}



            <p>Designed by <a href="https://www.linkedin.com/in/muthu-ammew" className="text-success text-decoration-none fw-bolder">Muthu</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
