const express = require('express');
const categoriesController = require('../controllers/categories');
const usersController = require('../controllers/users');

const router = express.Router();

router.get('/categories', categoriesController.get);
router.post('/categories/create', categoriesController.create);
router.patch('/categories/edit/:id', categoriesController.edit);
router.delete('/categories/delete/:id', categoriesController.delete);

router.post('/users/create', usersController.create);

module.exports = router;