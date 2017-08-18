"use strict";

const express = require('express');
const app = express();

const port = 3000;


app.use(express.static('client'));



app.listen(port, (err) => {
    if (err) {
        return console.error('An error occurred', err);
    }

    console.log(`server is listening on ${port}`);
});

