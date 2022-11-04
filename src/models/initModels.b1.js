const Users = require('./users.models')
const UsersRecipes = require('./users_recipes.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Types = require('./types.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const UsersIngredients = require('./users_ingredients.models')
const Instructions = require('./instructions.models')
const Recipes = require('./recipes.models')
    
const initModels = () => {
      //* 1 -> M
      Recipes.belongsTo(Users)
      Users.hasMany(Recipes)
    
      //* 1 -> M
      UsersRecipes.belongsTo(Users)
      Users.hasMany(UsersRecipes)
    
      //* 1 -> M
      UsersRecipes.belongsTo(Recipes)
      Recipes.hasMany(UsersRecipes)
    
      //* 1 -> M
      Recipes.belongsTo(Categories)
      Categories.hasMany(Recipes)
    
      //* 1 -> M
      Ingredients.belongsTo(Types)
      Types.hasMany(Ingredients)
    
      //* 1 -> M
      RecipesIngredients.belongsTo(Recipes)
      Recipes.hasMany(RecipesIngredients)
    
      //* 1 -> M
      RecipesIngredients.belongsTo(Ingredients)
      Ingredients.hasMany(RecipesIngredients)
    
      //* 1 -> M
      UsersIngredients.belongsTo(Users)
      Users.hasMany(UsersIngredients)
    
      //* 1 -> M
      UsersIngredients.belongsTo(Ingredients)
      Ingredients.hasMany(UsersIngredients)
    
      //* 1 -> M
      Instructions.belongsTo(Recipes)
      Recipes.hasMany(Instructions)
}
module.exports = initModels
