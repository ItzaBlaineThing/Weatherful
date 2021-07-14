// Import Libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const https = require('https');
var fs = require('fs');

// Pulling in our config information that is not being stored in git, including our API Key
var configPath = './config.json';
var configInfo = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

// Setup Express
const app = express();

let port = process.env.PORT || 5000;

// Setup Body Parser
app.use(bodyParser.urlencoded({extended: true}));

// Setup Public Folders for Express
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("public"));

// Express Routes
app.get("/", (req, res) => {
    res.send("Up and Running!");
});

var searchParameter = "";

app.get("/api/results", (req, res) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParameter}&units=imperial&appid=${configInfo.key}`;
    console.log(url);

    https.get(url, (response) => {

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            res.send({weatherData});
        });
        
    });

});

app.post("/api/search", (req, res) => {

    console.log(req.body);
    searchParameter = req.body.searchParameter;

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParameter}&appid=${configInfo.key}`;
    // console.log(url);

    // https.get(url, (response) => {

    //     response.on('data', (data) => {
    //         const weatherData = JSON.parse(data);
    //         res.send({weatherData});
    //     });
        
    // });

    res.redirect("/weather")

})

app.listen(port, () => {
    console.log("Server running on port " + port);
});