const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController.js');

// GET /api/notes - Retrieve all notes
router.get('/', notesController.getAllNotes);

// POST /api/notes - Create a new note
router.post('/', notesController.createNote);

// GET /api/notes/:id - Retrieve a specific note by ID
router.get('/:id', notesController.getNoteById);

// PUT /api/notes/:id - Update a specific note by ID
router.put('/:id', notesController.updateNoteById);

// DELETE /api/notes/:id - Delete a specific note by ID
router.delete('/:id', notesController.deleteNoteById);


router.get('/search', notesController.searchNotes);

module.exports = router;
