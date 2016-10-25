/**
 * WUnderground current conditions collector.
 * Gathers current conditions from the Wunderground API for a list of places.
 * Requests for each place are sent to the API periodically
 * Free API accounts only allow to make:
 * - 10 requests/minute
 * - 500 requests/day
 */
const request = require('request');
const db = require('../util/db');
const logger = require('../util/logger');

const connectToDB = db.connect;
const baseUrl = `http://api.wunderground.com/api/${process.env.WUNDERGROUND_KEY}/geolookup/conditions/q/`;
const collectionInternalSeconds = 30 * 60;


module.exports = options => 
    connectToDB()
        .then(db => startCollector(db, options))
        .catch(logger.error);


function startCollector(db, options) {
    logger.info("Connected successfully to server");
    options.places.forEach(scheduleRequest);

    function scheduleRequest(place) {
        // then schedule the rest
        setInterval(
            () => getCurrentConditions(place), 
            collectionInternalSeconds * 1000
        )
    }

    function getCurrentConditions(place) {
        const url = `${baseUrl}${place}.json`;
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                save(body);
            } else {
                showRequestError(error, response);
            }
        });
    }

    function save(response) {
        const conditions = JSON.parse(response);
        const collection = db.collection('conditions');
        collection.insertOne(conditions, () => {
            logger.info(`Saved current conditions for ${conditions.location.city}`)
        });
    }

};

function showRequestError(error, response) {
    const statusCode = typeof response === 'object' ? response.statusCode : '';
    logger.error(`${error} Status code ${statusCode}`);
}
