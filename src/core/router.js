const express = require('express');
const categoriesController = require('../controllers/categories');
const usersController = require('../controllers/users');

const router = express.Router();

router.get('/categories', categoriesController.get);
router.post('/categories/create', categoriesController.create);
router.patch('/categories/edit/:id', categoriesController.edit);
router.delete('/categories/delete/:id', categoriesController.delete);

router.get('/users', usersController.get);
router.post('/users/create', usersController.create);
router.patch('/users/edit/:id', usersController.edit);
router.delete('/users/delete/:id', usersController.delete);

module.exports = router;