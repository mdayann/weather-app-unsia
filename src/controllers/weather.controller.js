const catchAsync = require('../utils/catchAsync');
const { weatherService } = require('../services');

const getWeather = catchAsync(async (req, res) => {
  const result = await weatherService.queryWeather(req.query.lat, req.query.lon);
  res.json(result);
});

const getWeatherHourly = catchAsync(async (req, res) => {
  const result = await weatherService.queryHourlyWeather(req.query.lat, req.query.lon);
  res.json(result);
});

const getWeatherDaily = catchAsync(async (req, res) => {
  const result = await weatherService.queryHourlyDaily(req.query.lat, req.query.lon);
  res.json(result);
});

module.exports = {
  getWeather,
  getWeatherHourly,
  getWeatherDaily,
};
