const valid = require('validator');
const request = require('request');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send('<h1>XUAN NHI WEBSITE 01</h1>')
});


app.get('/decal', function (req, res) {
    res.send({
        name: "cat decal",
        address: "18 hung vuong",
        tel: "841991"
    })
});

app.listen(port,()=> {
    console.log("Start XUAN NHI server")
});