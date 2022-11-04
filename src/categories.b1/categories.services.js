
const uuid = require('uuid')
const categoriesControllers = require('./categories.controllers')

const getAllCategories = (req, res) => {
  categoriesControllers.getAllCategories()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}


const createCategorie = (req, res) => {
  const { name } = req.body
  if (name) {
    categoriesControllers.createCategorie({
      name
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
        name: 'string',
      }
    })
  }

}

const getCategorieById = (req, res) => {
  const { id } = req.params
  categoriesControllers.getCategorieById(id)
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

const editCategorieById = (req, res) => {
  const { id } = req.params
  const { name } = req.body
  if (name) {
    categoriesControllers.editCategorie(id,
      { name })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        name: 'string',
      }
    })
  }
}
const deleteCategorieById = (req, res) => {
  const { id } = req.params
  if (id) {
    categoriesControllers.deleteCategorie(id)
      .then(data => {
        if (data)
          res.status(204).json(data)
        else
          res.status(404).json({ message: 'Invalid Id' })
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Error id not received',
    })
  }
}


module.exports = {
  createCategorie,
  getAllCategories,
  getCategorieById,
  editCategorieById,
  deleteCategorieById
}
