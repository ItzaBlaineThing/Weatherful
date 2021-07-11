// Import Libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

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
    res.send("Up and Running!")
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});