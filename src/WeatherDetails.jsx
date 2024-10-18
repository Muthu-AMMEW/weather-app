
export default function WeatherDetails({ icon, temp, city, country, lat, log, humidity, wind }) {
  return (
    <>
      <img src={icon} alt="" style={{ width: "133px", height: "133px" }} />

      <div>
        <h2>{temp}°C</h2>
      </div>

      <div>
        <h2>{city}</h2>
      </div>
      
      <div>
        <h6>{country}</h6>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="text-center me-5">
          <h6>Latitude</h6>
          <div>{lat}</div>
        </div>
        <div className="text-center">
          <h6>Longitude</h6>
          <div>{log}</div>
        </div>
      </div>

      <div className="d-flex w-100 justify-content-around m-3">
        <div className="d-flex flex-column align-items-center">
          <i className="bi bi-droplet-half"></i>
          <div>{humidity} %</div>
          <h6>humidity</h6>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="bi bi-speedometer2"></i>
          <div>{wind} Km/h</div>
          <h6>Wind Speed</h6>
        </div>
      </div>
    </>
  )
}
