

const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

const categoriesServices = require('./categories.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        categoriesServices.createCategorie)


router.route('/:id')
    .get(categoriesServices.getCategorieById)
    .patch(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        categoriesServices.editCategorieById)
    .delete(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        categoriesServices.deleteCategorieById)


module.exports = router