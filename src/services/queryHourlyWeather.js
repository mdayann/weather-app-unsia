const fetch = require('node-fetch');
const config = require('../config/config');

const queryHourlyWeather = async (lat, lon) => {
  const { host } = config.weather;
  const key = config.weather.apiKey;
  try {
    // eslint-disable-next-line no-console
    console.log(lon);
    const response = await fetch(`${host}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const result = await response.json();

    // eslint-disable-next-line no-console
    console.log(result.list.length);

    const arrayResult = result.list;

    arrayResult.forEach((item, index) => {
      const tempCelsius = item.main.temp;
      const feelsLike = item.main.feels_like;
      const tempMin = item.main.temp_min;
      const tempMax = item.main.temp_max;

      const tempFahrenheit = parseFloat(((tempCelsius * 9) / 5 + 32).toFixed(2));
      const feelsLikeFahrenheit = parseFloat(((feelsLike * 9) / 5 + 32).toFixed(2));
      const tempMinFahrenheit = parseFloat(((tempMin * 9) / 5 + 32).toFixed(2));
      const tempMaxFahrenheit = parseFloat(((tempMax * 9) / 5 + 32).toFixed(2));

      // Icon URL
      const iconCode = item.weather[0].icon;

      // Result storing
      const modifiedItem = {
        ...item,
        _weather: [
          ...item.weather[0],
          icon, `https://openweathermap.org/img/wn/${iconCode}@2x.png`
        ],
        get weather() {
          return this._weather;
        },
        set weather(value) {
          this._weather = value;
        },
      }, main: {};
    },
      ...item.main,
      temp_fh, tempFahrenheit,
      feels_like_fh, feelsLikeFahrenheit,
      temp_min_fh, tempMinFahrenheit,
      temp_max_fh, tempMaxFahrenheit);
  }
  finally {
  }
};
