const express = require('express');
const weatherController = require('../../controllers/weather.controller');

const router = express.Router();

router.route('/current').get(weatherController.getWeather);
router.route('/hourly').get(weatherController.getWeatherHourly);
router.route('/daily').get(weatherController.getWeatherDaily);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather
 */

/**
 * @swagger
 * /weather/current:
 *   get:
 *     summary: Get current weather
 *     description: Retrive data for current weather.
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: string
 *         description: Latitude
 *       - in: query
 *         name: lon
 *         schema:
 *           type: string
 *         description: Longitude
 *     responses:
 *       "200":
 *         "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WeatherResponse'
 *       "503":
 *         $ref: '#/components/responses/WeatherError'
 * /weather/hourly:
 *   get:
 *     summary: Get hourly weather forecast
 *     description: Retrieve hourly weather forecast data.
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: string
 *         description: Latitude
 *       - in: query
 *         name: lon
 *         schema:
 *           type: string
 *         description: Longitude
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cod:
 *                   type: string
 *                 message:
 *                   type: integer
 *                 cnt:
 *                   type: integer
 *                 list:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       dt:
 *                         type: integer
 *                       main:
 *                         $ref: '#/components/schemas/Main'
 *                       weather:
 *                         type: array
 *                         items:
 *                           $ref: '#/components/schemas/Weather'
 *                       clouds:
 *                         type: object
 *                         properties:
 *                           all:
 *                             type: integer
 *                       wind:
 *                         $ref: '#/components/schemas/Wind'
 *                       visibility:
 *                         type: integer
 *                       pop:
 *                         type: number
 *                       rain:
 *                         type: object
 *                         properties:
 *                           3h:
 *                             type: number
 *                       sys:
 *                         type: object
 *                         properties:
 *                           pod:
 *                             type: string
 *                       dt_txt:
 *                         type: string
 *                 city:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     coord:
 *                       $ref: '#/components/schemas/Coord'
 *                     country:
 *                       type: string
 *                     population:
 *                       type: integer
 *                     timezone:
 *                       type: integer
 *                     sunrise:
 *                       type: integer
 *                     sunset:
 *                       type: integer
 *       "503":
 *         $ref: '#/components/responses/WeatherError'
 *
 * /weather/daily:
 *   get:
 *     summary: Get daily weather forecast
 *     description: Retrieve daily weather forecast data.
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: string
 *         description: Latitude
 *       - in: query
 *         name: lon
 *         schema:
 *           type: string
 *         description: Longitude
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cod:
 *                   type: string
 *                 message:
 *                   type: integer
 *                 cnt:
 *                   type: integer
 *                 list:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       dt:
 *                         type: integer
 *                       main:
 *                         $ref: '#/components/schemas/Main'
 *                       weather:
 *                         type: array
 *                         items:
 *                           $ref: '#/components/schemas/Weather'
 *                       clouds:
 *                         type: object
 *                         properties:
 *                           all:
 *                             type: integer
 *                       wind:
 *                         $ref: '#/components/schemas/Wind'
 *                       visibility:
 *                         type: integer
 *                       pop:
 *                         type: number
 *                       rain:
 *                         type: object
 *                         properties:
 *                           3h:
 *                             type: number
 *                       sys:
 *                         type: object
 *                         properties:
 *                           pod:
 *                             type: string
 *                       dt_txt:
 *                         type: string
 *                 city:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     coord:
 *                       $ref: '#/components/schemas/Coord'
 *                     country:
 *                       type: string
 *                     population:
 *                       type: integer
 *                     timezone:
 *                       type: integer
 *                     sunrise:
 *                       type: integer
 *                     sunset:
 *                       type: integer
 *       "503":
 *         $ref: '#/components/responses/WeatherError'
 */
