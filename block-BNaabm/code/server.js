var express = require('express');
var app = express();

// function middleware(req, res, next) {
//     console.log(req.method, req.url);
//     next();
// }
// app.use(middleware);
app.use("/", (req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.get('/', (req, res) => {
    res.send('welcome To Index Page');
});
app.listen(4000, () => {
    console.log("Listening On port 4000");
})