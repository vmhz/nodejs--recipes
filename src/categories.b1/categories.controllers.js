

const uuid = require('uuid')
const Categories = require('../models/categories.models')


const getAllCategories = async () => {
  const data = await Categories.findAll()
  return data
}

const getCategorieById = async (id) => {
  const data = await Categories.findOne({
    where: {
      id
    }
  })
  return data
}

const createCategorie = async (data) => {
  const response = await Categories.create({
    id: uuid.v4(),
    name: data.name,
  })
  return response
}
const editCategorie = async (id, data) => {
  const response = await Categories.update(data, {
    where: {
      id
    }
  });
  return response;
};

const deleteCategorie = async (id) => {
  const data = await Categories.destroy({
    where: {
      id
    }
  })
  return data
}



module.exports = {
  getAllCategories,
  getCategorieById,
  createCategorie,
  editCategorie,
  deleteCategorie

}

