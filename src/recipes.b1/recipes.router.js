

const router = require('express').Router()
const passport = require('passport')

const recipesServices = require('./recipes.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(recipesServices.getAllRecipes)
    .post(recipesServices.createRecipe)


router.route('/:id')
    .get(recipesServices.getRecipeById)
    .patch(recipesServices.patchRecipeById)
    .delete(recipesServices.deleteRecipeById)


module.exports = router