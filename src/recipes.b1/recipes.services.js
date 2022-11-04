const recipesControllers = require('./recipes.controllers')

const getAllRecipes = (req, res) => {
  recipesControllers.getAllRecipes()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}


const createRecipe = (req, res) => {
  const userId = req.user.id
  const {
    title, description,
    urlImg, time, portions,
    categoryId, origin/* , likes */ } = req.body
  if (title
    && description
    && time
    && portions
    && categoryId) {
    recipesControllers.createRecipe({
      userId, title, description,
      urlImg, time, portions,
      categoryId, origin
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        title: 'string',
        description: 'string',
        time: 'number',
        portions: 'number',
        categoryId: 'number',
      }
    })
  }

}

const getRecipeById = (req, res) => {
  const { id } = req.params
  recipesControllers.getRecipeById(id)
    .then(data => {
      if (data)
        res.status(200).json(data)
      else
        res.status(404).json({ message: 'not found' })
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })


}

const patchRecipeById = (req, res) => {
  const recipeId = req.params.recipe_id
  const userId = req.user.id
  const {
    title, description,
    urlImg, time, portions,
    categoryId, origin } = req.body
  if (title
    || description
    || urlImg
    || time
    || portions
    || categoryId
    || origin
  ) {
    recipesControllers.editRecipe(recipeId, {
      userId, title, description,
      urlImg, time, portions,
      categoryId, origin
    })
      .then(data => {
        if (data[0]) {
          res.status(200).json(data)
        } else {
          res.status(400).json({message: `Invalid ID`})
        }
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Fields undefined',
      fields: {
        name: 'string',
        category: 'string',
        price: 'integer',
        isAvailable: 'bool'
      }
    })
  }
}
const deleteRecipeById = (req, res) => {
  const { id } = req.params
  if (name, category, price, isAvailable) {
    recipesControllers.deleteRecipe(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Error id recipe not found',
    })
  }
}


module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  patchRecipeById,
  deleteRecipeById
}
