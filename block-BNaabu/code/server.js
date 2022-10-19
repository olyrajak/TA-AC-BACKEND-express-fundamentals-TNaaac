const express = require("express");
const logger = require("morgan");
const cookie = require("cookie-parser");


const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ exteded: false }));
app.use(logger("dev"));
app.use(cookie());

app.use((req, res, next) => {
    if (req.url === "/admin") {
        return next("Unauthorized");
    }
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Express");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.use((req, res, next) => {
    
    res.sendFile(__dirname + "/error.html");
    
});

app.use((err, req, res, next) => {
    
    res.send(err);
    
});

app.listen(4020, () => {
    
    console.log("Server listening on port 4020");
    
});
