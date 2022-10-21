var express = require('express');
var app = express();



// Q. Create a middleware which is similar to morgan(logger) which logs

// - requested method
// - requested url
// - current time



app.use((req, res, next) => {
    let currentdate = new Date();
    console.log(req.method, req.path, currentdate);
    next();
});


// Q. Create a middleware which is similar to express.json()

// - parses json data and puts it into `req.body`

app.use((req, res, next) => {
    let jsonData = "";
    req.on('data', (chunk) => {
        jsonData += chunk;
    })
    req.on('end', () => {
        if (jsonData && req.headers['content-type'] === 'application/json') {
            req.body = JSON.parse(jsonData);
            console.log(req.body);
        }
    })

    next();
});


// Q. Create a middleware which functions similar to express.static()

app.use((req, res, next) => {
    let pathUrl = __dirname + '/public';
    if (req.url !== '/') {
        res.sendFile(pathUrl + req.url);
    }

})

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(3333, () => {
    console.log('server is listening on port 3333');
});