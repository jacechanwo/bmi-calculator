//jshint esversion:7

const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);
var bmi = weight / (height**2);
res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
console.log("Server is running on port 3000");
});

// Added a new comment
