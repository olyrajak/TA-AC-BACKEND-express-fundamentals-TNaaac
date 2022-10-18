var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//     res.send("Welcome");
// })

var logger = require('morgan');
var cookieParser = require('cookie-parser');

app.use(logger('dev'));
app.use(cookieParser());
app.use((req, res, next) => {
    var count = req.cookies.count;
    if (count) {
        res.cookie("count", Number(count) + 1);
    } else {
        res.cookie("count", 1);
    }
    console.log(count);
    // res.cookie("count", 1);
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/new", (req, res) => {
    res.sendFile(__dirname + "/new.html");
});
app.post("/new", (req, res) => {
    res.json(req.body);
});
app.get("/new/:name", (req, res) => {
    var username = req.params.name;
    res.send(username);
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});