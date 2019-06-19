const express = require("express");
const cors = require("cors");

var server = express();
var port = 8080;

server.use(express.urlencoded({
    extended: false
}));
server.use(cors());
server.use(express.json());


var data = require("./data.js");

server.get("/names", function(req, res) {
    var response = {
        names: data.names,
    }
    res.json(response);
});

server.get("/hotcold", function(req, res) {
    var msg = "";
    if (req.body.guess > 100 || req.body.guess < 1) {
        res.status(400);
        var response = {
            msg: "Number between 1 and 100 please"
        }
        res.json(response);
    }

    if (req.body.guess == data.number) {
        msg = "You guessed it";
    } else if (req.body.guess < data.number) {
        msg = "To low";
    } else if (req.body.guess > data.number) {
        msg = "To high";
    }

    var response = {
        msg: msg,
    }
    res.json(response);
});

server.get("/age-group", function(req, res) {
    var ageGroup = "";
    if (req.body.age < 12) {
        ageGroup = "Child";
    } else if (req.body.age > 12 && req.body.age < 18) {
        ageGroup = "Teen";
    } else {
        ageGroup = "Adult";
    }

    var response = {
        ageGroup: ageGroup
    }
    res.json(response);
});

server.listen(port, function() {
    console.log(`Listening of port ${port}`);
});