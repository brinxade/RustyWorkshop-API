const express = require('express');
const categoriesController = require('../controllers/categories');

const router = express.Router();

router.get('/categories', categoriesController.get);
router.post('/categories/create', categoriesController.create);
router.patch('/categories/edit/:id', categoriesController.edit);
router.delete('/categories/delete/:id', categoriesController.delete);

module.exports = router;