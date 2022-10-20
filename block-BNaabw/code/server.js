const express = require("express");
const logger = require("morgan");
const cookie = require("cookie-parser");


const app = express();

app.use(express.json());
app.use(logger("dev"))
app.use(cookie());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    res.cookie("username", "demo");
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/gallery.html");
});



app.use((req, res, next) => {
    res.sendFile(__dirname + "/notfound.html");
});

app.use((err, req, res, next) => {
    res.send(err);
});
app.listen(4000, () => {
    console.log("Server listening on 4000");
})