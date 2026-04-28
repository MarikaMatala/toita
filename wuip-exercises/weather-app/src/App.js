import './App.css';
import Button from '@mui/material/Button';
import axios from 'axios'
import { TextField } from '@mui/material';
import React, { useState } from 'react';

function App() {
  const [cityname, setCityname] = useState("Jyväskylä")
  const [weather, setWeather] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const ICON_URL = 'http://openweathermap.org/img/wn/';

  const getWeather = () => {
    console.log(weather)
    axios
      .get(URL+cityname+'&appid='+API_KEY+'&units=metric')
      .then(response => {
        // console.log(response.data) to see data in console
        setWeather(response.data)
      })
  }

  return (
    <div style={{padding: "5px"}}>
      <h1>React Weather Application</h1>
      <p>
        This application will fetch a weather forecast from the OpenWeather. 
        Just type city name and click Get Forecast button!
      </p>
      <form>
        <TextField label="Cityname"
                   defaultValue="Jyväskylä"
                   id="outlined-basic"
                   onChange={(e) => setCityname(e.target.value)} 
                   style={{margin: '5px'}}/>
        <br></br>
        <Button variant="contained" 
                size='small'
                onClick={() => getWeather()} 
                style={{margin: '5px'}}>Get a Forecast
        </Button>        
      </form>

      <h2>Weather forecast for {cityname}</h2>
      { weather !== null &&
        <div>
          City name: {weather.name}<br/>
          Description: {weather.weather[0].description}<br/>
          Temperature: {weather.main.temp} °C<br/>
          Feels like: {weather.main.feels_like} °C<br/>
          Daily lowest - highest: from {weather.main.temp_min} °C to {weather.main.temp_max} °C<br/>
          <img
            alt={cityname}
            style={{height: 100, width: 100}}
            src={ICON_URL + weather.weather[0].icon + '.png'} />
        </div>
      }
    </div>
  );
}

export default App;








