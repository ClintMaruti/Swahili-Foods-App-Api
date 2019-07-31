const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.post('/', async (req,res) => {
    // Create a new recipe
    try{
        const createRecipe = new Recipe(req.body);
        await createRecipe.save();
        res.status(201).send({createRecipe});
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req,res) => {
    // Get all recipes available
    try{
        const recipes = await Recipe.find();
        res.status(200).send({recipes});
    } catch (error){
        res.status(400).send(error);
    }
});

router.get('/:recipeId', async (req,res) => {
    // Get specific recipe
    try {
        // const id = req.params.recipeId;
        const recipe = await Recipe.findById({_id: req.params.recipeId});
        res.status(200).send({recipe});
    } catch(error) {
        res.status(400).send(error);
    }
});

router.patch('/:recipeId', async (req,res) => {
    // Update recipe
    try {
        const recipe = await Recipe.findByIdAndUpdate({_id: req.params.recipeId},{
            $set: req.body
        });
        res.status(201).json({message: "Updated!"});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:recipeId', async (req,res) => {
    // Delete a recipe
    try {
        const delRecipe = await Recipe.findOneAndDelete({_id: req.params.recipeId});
        res.status(204).json({message: "Deleted Successfuly!"});
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
