"use strict";

const express = require('express');
const app = express();
const fizzBuzz = require('./lib/fizzbuzz');

const port = 3000;


app.use(express.static('client'));

app.get('/api/fizzbuzz', function (req, res) {
    res.send(fizzBuzzNumbers());
});


app.listen(port, (err) => {
    if (err) {
        return console.error('An error occurred', err);
    }

    console.log(`server is listening on ${port}`);
});

function fizzBuzzNumbers() {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        result.push(fizzBuzz(i));
    }
    return result;
}
