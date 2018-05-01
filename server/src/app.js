const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//object database for meal options
const meals = 
[
    {
        name: 'Beans',
        price: 200,
        mealId: 1                            
    },
    {
        name: 'Spag',
        price: 300,
        mealId: 2                           
    },
    {
        name: 'Rice',
        price: 500,
        mealId: 3
                               
    }
];

//object database for daily menus
const menu = 
[
    {
        name: 'Beans',
        mealId: 1                            
    },
    {
        name: 'Spag',
        mealId: 2                           
    },
    {
        name: 'Rice',
        mealId: 3
                               
    }
];

//object database for orders
const orders = 
[
    {
        name: 'Beans',
        quantity:2,
        mealId: 1,
        orderId:1                      
    }
]

app.get('*', (req, res) => res.status(404).send({
    message: 'welcome to nothingness . yes! notiness',
}));

module.exports = app;
