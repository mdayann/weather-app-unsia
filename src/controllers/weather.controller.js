const catchAsync = require('../utils/catchAsync');
const { weatherService } = require('../services');

const getWeather = catchAsync(async (req, res) => {
  const result = await weatherService.queryWeather(req.query.lat, req.query.lon);
  res.json(result);
});

module.exports = {
  getWeather,
};
