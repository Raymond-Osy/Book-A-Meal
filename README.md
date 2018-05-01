# Book-A-Meal

## Application - Description
Book-A-Meal is an application that allows customers to make food orders and helps the food  vendor know what the customers want to eat. 

* <b>Templates is hosted live on</b> https://raymond-osy.github.io/Book-A-Meal/UI/index.html
## Table of Content

* [Features](#features)
* [Technology](#technology)
* [Installation](#installation)
* [Testing](#testing)
* [API End Points](#api-end-points)

## Features
Book-A-Meal consist of the following features:
###  Users
* Users can signup into Book-A-Meal
* Users can log into Book-A-Meal
* Users can view all Menu for the day
* Users can make orders from the menu
* Users can choose to modify an order
* Users can choose to delete an order
* Users can choose setup menu for a specific day

## Technology

**Book-A-Meal** makes use of modern technologies. The core ones are:

* ECMAScript 6: Also known as ES2015, this is a version of Javascript with
    next-generation features like arrow functions, generators, enhanced object literals,
    spread operators and more. The ES2015 is used in many areas of this project. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.
* NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side.
    See [this link](https://en.wikipedia.org/wiki/Node.js) for details.
* ExressJS: ExpressJS, is a web application framework for Node.js, It is designed for building web applications and APIs.
    see [this link](https://en.wikipedia.org/wiki/Express.js).
* Postgresql & Sequelize: Postgresql is an advanced open source Object-Relational Model (ORM) database.Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
* Major codes are written using the Airbnb javascript style guide, see [this link](https://github.com/airbnb/javascript) for details.

## Installation
1. Clone the repository:
```
https://raymond-osy.github.io/Book-A-Meal/UI/index.html
```
2. Navigate into the cloned repository:
```
cd Book-A-Meal
```
3. Install dependencies.
```
npm install
```
4. Start the application
```
npm run gstart
```
5. Install postman to test all endpoints

## Testing
- to test run `npm test`

## API End Points
<table>
<tr><th>Http verb</th><th>Endpoint</th><th>Action</th></tr>
<tr> <td>GET</td> <td> /meals </td> <td>Get all meal options</td></tr>
<tr> <td>POST</td> <td>/meals </td><td>Add a meal option </td></tr>
<tr> <td>PUT</td><td>/meals/<mealId>  </td><td>Update the information of a meal option </td></tr>
<tr><td>DELETE</td><td>/meals/<mealId></td><td>  Remove a meal option </td></tr>
<tr> <td>POST </td><td>/menu/ </td><td> Setup the menu for the day</td><tr>
<tr><td>GET </td><td>/menu/ </td><td> Get the menu for the day</td></tr>
<tr> <td>POST</td><td>/orders</td><td> Select the meal option from the menu</td></tr>
<tr><td> PUT </td><td>/orders/orderId </td><td> Modify an order</td></tr>
<tr><td> GET </td><td>/orders </td><td> Get all the orders</td></tr>
</table>

<i>Project still in progress</i>