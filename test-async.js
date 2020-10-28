// Load the fetch and with-query
const fetch = require('node-fetch');
const withQuery = require('with-query').default;

const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '';

// Construct the URL
const url = withQuery(
    ENDPOINT, {
        q: 'singapore',
        appid: API_KEY
    }
);

console.log('url = ', url.toString())
const getWeather = async (city, apiKey) => {
    const url = withQuery(
        ENDPOINT, {
            q: 'singapore',
            appid: API_KEY
        }
    );
    
    // Equivalent to first .then(result => {})
    let result = await fetch(url);

    // Equivalent to second .then(result => {})    
    try {
      const weather = await result.json();
    } catch(e) {
      console.error('error');
      return Promise.reject(e);
    }

    return weather;

};

// Returns a Promise
getWeather('singapore', API_KEY)
    .then(weather => {
        console.log('The weather: ', weather);
    });
