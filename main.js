// Libraries
const express = require('express');
const handlebars = require('handlebars');

const fortuneCookies = require('./fortune-cookie.js');

// Instances
const app = express();

const PORT = 3000;

// Express configuration
app.get('/', (req, res) => {
    res.status(200);
    res.format({
        'text/html': () => {
            res.send(`<h3>${fortuneCookies()}</h3>`)
        },
        'text/plain': () => {
            res.send(fortuneCookies())
        },
        'application/json': () => {
            const text = fortuneCookies();
            res.json({
                cookieText: text,
                generatedOn: (new Date()).toDateString()
            })
        },
        'default': () => {
            res.status(406);
            res.type('text/plain');
            res.send('Not supported: ${req.get("Accept")}')
        }
    })
})


// Start express
app.listen(PORT, () => {
    console.log(`Application started on port ${PORT} at ${new Date()}`);
})
