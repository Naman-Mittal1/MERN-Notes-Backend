const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categoriesController');

// GET /api/categories - Retrieve all categories
router.get('/', categoriesController.getAllCategories);

// POST /api/categories - Create a new category
router.post('/', categoriesController.createCategory);

// GET /api/categories/:id - Retrieve a specific category by ID
router.get('/:id', categoriesController.getCategoryById);

// PUT /api/categories/:id - Update a specific category by ID
router.put('/:id', categoriesController.updateCategoryById);

// DELETE /api/categories/:id - Delete a specific category by ID
router.delete('/:id', categoriesController.deleteCategoryById);

module.exports = router;
