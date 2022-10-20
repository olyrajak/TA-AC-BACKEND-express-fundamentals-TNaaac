var express = require("express");
var morgan = require("morgan");
var cookie = require("cookie-parser");

var app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ exteded: false }));
app.use(morgan("dev"));
app.use(cookie());

app.use((req, res, next) => {
    res.cookie("username", "demo");
    next();
});

app.get("/", (req, res) => {
    res.send("<h2>Welcome to express</h2>");
});

app.get("/about", (req, res) => {
    res.send("My name is qwerty");
});

app.get("/users/:username", (req, res) => {
    var username = req.params.username;
    res.send(`<h2>${username}</h2>`);
});

app.post("/form", (req, res) => {

    res.json(req.body);
});

app.post("/json", (req, res) => {
    res.json(req.body);
});



app.use((req, res, next) => {
    res.send("Page Not Found");
});

app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});