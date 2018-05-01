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
const meals = [{
    name: 'Beans',
    price: 200,
    mealId: 1
}, {
    name: 'Spag',
    price: 300,
    mealId: 2
}, {
    name: 'Rice',
    price: 500,
    mealId: 3

}];

//object database for daily menus
const menu = [{
    name: 'Beans',
    mealId: 1
}, {
    name: 'Spag',
    mealId: 2
}, {
    name: 'Rice',
    mealId: 3

},
 {
    name: 'abacha',
    mealId: 4
}
];

//object database for orders
const orders = [{
    name: 'Beans',
    quantity: 2,
    mealId: 1,
    orderId: 1
}];

//Get all the meal options 
app.get('/meals', (req, res) => res.status(200).send(meals));

// Add a meal option
app.post('/meals', function (req, res) {
    const mealId = meals.length === 0 ? 1 : meals.length + 1;
    const newMeal = req.body;
    newMeal.mealId = mealId;
    meals.push(newMeal);
    res.status(201).send({ message: 'Meal successfully added', meals });
});

//Update the information of a meal option
app.put('/meals/:mealId', function (req, res) {
    const mealId = req.params.mealId;
    const meal = meals.find(mealOption => +mealOption.mealId === +mealId);
    if (!meal) {
        return res.status(404).json({ message: `Update failed because Meal Option with Id ${mealId} does not exist`, orders });
    }
    Object.assign(meal, req.body);
    return res.json({ message: 'Meal Option updated successfully', meals });
});

// Remove a meal option
app.delete('/meals/:mealId', function (req, res) {
    const mealId = req.params.mealId;
    const meal = meals.find(mealOption => +mealOption.mealId === +mealId);
    if (!meal) {
        return res.status(404).json({ message: `Meal Option with Id ${mealId} does not exist`, meals });
    }
    meals.splice(meals.indexOf(meal), 1);
    return res.status(200).json({ message: `Meal Option  with Id ${mealId} was deleted successfully`, meals });
});

// Setup the menu for the day
app.post('/menu', function (req, res) {
    const newMenuItem = req.body;
    menu.push(newMenuItem);
    res.status(201).send({ message: 'Menu successfully added', menu });
});

// Get the menu for the day
app.get('/menu', (req, res) => res.status(200).send(menu));

// Select the meal option from the menu
app.post('/orders', function (req, res) {
    const orderId = orders.length === 0 ? 1 : orders.length + 1;
    const newOrder = req.body;
    newOrder.orderId = orderId;
    orders.push(newOrder);
    res.status(201).send({ message: 'Order successfully Placed', orders });
});

// Modify an order
app.put('/orders/:orderId', function (req, res) {
    const orderId = req.params.orderId;
    const order = orders.find(orderItem => +orderItem.orderId === +orderId);
    if (!order) {
        return res.status(404).json({ message: `Update failed because Order with Id ${orderId} does not exist`, orders });
    }
    Object.assign(order, req.body);
    return res.json({ message: 'Order updated successfully!', orders });
});

// Get all the orders
app.get('/orders', (req, res) => res.status(200).send(orders));

app.get('*', (req, res) => res.status(404).send({
    message: 'welcome to nothingness . yes! notiness'
}));

module.exports = app;