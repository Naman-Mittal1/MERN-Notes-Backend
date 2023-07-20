const express = require('express');
const router = express.Router();

const tagsController = require('../controllers/tagsController');

// GET /api/tags - Retrieve all tags
router.get('/', tagsController.getAllTags);

// POST /api/tags - Create a new tag
router.post('/', tagsController.createTag);

// GET /api/tags/:id - Retrieve a specific tag by ID
router.get('/:id', tagsController.getTagById);

// PUT /api/tags/:id - Update a specific tag by ID
router.put('/:id', tagsController.updateTagById);

// DELETE /api/tags/:id - Delete a specific tag by ID
router.delete('/:id', tagsController.deleteTagById);

module.exports = router;
