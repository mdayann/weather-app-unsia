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

    return result;
  } catch (error) {
    throw new ApiError(httpStatus.SERVICE_UNAVAILABLE, 'Error getting weather data');
  }
};

module.exports = {
  queryWeather,
};
