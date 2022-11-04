const uuid = require('uuid')

const Recipes = require('../models/recipes.models')


const getAllRecipes = async () => {
  const data = await Recipes.findAll()
  return data
}

const getRecipeById = async (id) => {
  const data = await Recipes.findOne({
    where: {
      id
    }
  })
  return data
}

/* 
id: data.id,
title: data.title,
validate: data.validate,
description: data.description,
urlImg: data.urlImg,
validate: data.validate,
time: data.time,
portions: data.portions,
userId: data.userId,
references: data.references,
categoryId: data.categoryId,
references: data.references,
origin: data.origin,
likes: data.likes,
*/
const createRecipe = async (data) => {
  const response = await Recipes.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    urlImg: data.urlImg,
    time: data.time,
    portions: data.portions,
    userId: data.userId,
    categoryId: data.categoryId,
    origin: data.origin,
    likes: data.likes
  })
  return response
}
const editRecipe = async (id, data) => {
  const response = await Recipes.update(data, {
    where: {
      id
    }
  });
  return response;
};

const deleteRecipe = async (id) => {
  const data = await Recipes.destroy({
    where: {
      id
    }
  })
  return data
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  editRecipe,
  deleteRecipe

}

