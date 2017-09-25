"use strict";

const express = require('express');
const app = express();
const answer = require('./lib/answer');

const port = 3000;

app.use(express.static('client'));

app.get('/api/fizzbuzz', function (req, res) {
    res.send({answer: answer()});
});


app.listen(port, (err) => {
    if (err) {
        return console.error('An error occurred', err);
    }
    console.log(`server is listening on ${port}`);
});