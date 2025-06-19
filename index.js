const express = require('express');
const app = express();
const recipes = require('./Recipes');
const users = require('./Users');
const { json } = require('body-parser');
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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

app.delete('/api/recipes/:name', (req, res) => {
    let { name } = req.params;
    let recipeToBeDeleted = recipes.find(recipe => recipe.name === name);

    if(recipeToBeDeleted) {
        res.json({
            message: 'Recipe deleted',
            recipes: recipes.filter(recipe => recipe.name !== name)
        })
    } else {
        res.status(404)
        .json({message: `Recipe you are looking for doesn't exist`})
    }
})

app.put('/api/recipes/:name', (req, res) => {
    let { name } = req.params;
    // let name = req.params.name
    let recipeToBeUpdate = recipes.find(recipe => recipe.name === name);

    if(recipeToBeUpdate) {
        const updateRecipe = req.body;
        recipes.forEach(recipe => {
            if(recipe.name === req.params.name) {
                recipe.name = updateRecipe ? updateRecipe.name : recipe.name;
                res.json({message: 'Recipe updated', recipe})
            }
        })
    } else {
        res.status(404)
        .json({message: `Recipe you are looking for ${req.params.name} doesn't exist`})
    }
})



app.listen(3000, () => {
    console.log(`IT'S WORKING - PORT 3000`)
})  