const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('*', (req, res) => res.status(404).send({
    message: 'welcome to nothingness . yes! notiness',
}));

module.exports = app;
