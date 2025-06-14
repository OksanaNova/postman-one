const express = require('express');
const app = express();
const recipes = require('./Recipes');

// console.log(recipes);

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
})

app.listen(3000, () => {
    console.log(`IT'S WORKING - PORT 3000`)
})  