const express = require('express');
const app = express();
const recipes = require('./Recipes');
const users = require('./Users');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/recipes', (req, res) => {
    res.json(recipes);
})

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.post('/api/recipes', (req, res) => {
    const newRecipe = {
        name: req.body.name,
        category: req.body.category,
        time: req.body.time
    }
    recipes.push(newRecipe);
    res.json(recipes);
})

app.listen(3000, () => {
    console.log(`IT'S WORKING - PORT 3000`)
})  