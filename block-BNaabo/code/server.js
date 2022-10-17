const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ exteded: false }));


app.post("/json", (req, res) => {
    console.log(req.body);
});

app.post("/contact", (req, res) => {
    console.log(req.body);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log("Server listening at port 3000");
});