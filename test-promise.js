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
)
// console.log('url = ', url.toString())


const p = fetch(url);
p
    .then(result => {
        return result.json()
    })
    .then(result => {
        console.log('The Weather');
        console.log(result);
    })
    .catch(e => {
        console.log('errror');
        consolve.error('error: ', e)
    })

// p.
// then(result => {
//         console.log('Promise resolved');
//         console.log('result: ', result);
//         const p = result.json();
//         p.then(data => {
//             console.log('the weather');
//             console.log(data);
//         }).catch(e => {
//             console.log('error');
//             console.error('error: ', e);
//         })
//     })
//     .catch(err => {
//         console.error('error: ', err)
//     })
