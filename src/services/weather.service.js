const fetch = require('node-fetch');
const httpStatus = require('http-status');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');

const queryWeather = async (lat, lon) => {
  const { host } = config.weather;
  const key = config.weather.apiKey;
  try {
    // eslint-disable-next-line no-console
    console.log(lon);
    const response = await fetch(`${host}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const result = await response.json();

    // Calculate temperature in Fahrenheit
    const tempCelsius = result.main.temp;
    const feelsLike = result.main.feels_like;
    const tempMin = result.main.temp_min;
    const tempMax = result.main.temp_max;

    const tempFahrenheit = parseFloat(((tempCelsius * 9) / 5 + 32).toFixed(2));
    const feelsLikeFahrenheit = parseFloat(((feelsLike * 9) / 5 + 32).toFixed(2));
    const tempMinFahrenheit = parseFloat(((tempMin * 9) / 5 + 32).toFixed(2));
    const tempMaxFahrenheit = parseFloat(((tempMax * 9) / 5 + 32).toFixed(2));

    // Icon URL
    const iconCode = result.weather[0].icon;

    // Result storing
    result.weather[0].icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    result.main.temp_fh = tempFahrenheit;
    result.main.feels_like_fh = feelsLikeFahrenheit;
    result.main.temp_min_fh = tempMinFahrenheit;
    result.main.temp_max_fh = tempMaxFahrenheit;

    return result;
  } catch (error) {
    throw new ApiError(httpStatus.SERVICE_UNAVAILABLE, 'Error getting weather data');
  }
};

module.exports = {
  queryWeather,
};
