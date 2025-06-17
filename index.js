const express = require('express');
const app = express();
const recipes = require('./Recipes');
const users = require('./Users');

// console.log(recipes);

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
})

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.listen(3000, () => {
    console.log(`IT'S WORKING - PORT 3000`)
})  