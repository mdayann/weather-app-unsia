const express = require('express');
const weatherController = require('../../controllers/weather.controller');

const router = express.Router();

router.route('/current').get(weatherController.getWeather);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather
 */

/**
 * @swagger
 * /weather:
 *   post:
 *     summary: Get Current Weather
 *     tags: [Weather]
 *     requestBody:
 *       required: false
 *     responses:
 *       "201":
 *         description: Created
 */
