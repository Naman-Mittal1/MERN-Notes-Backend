
// notesController.js

// Sample array to simulate a database
let notes = [];

// GET /api/notes - Retrieve all notes
const getAllNotes = (req, res) => {
  res.json(notes);
};

// POST /api/notes - Create a new note
const createNote = (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: Date.now().toString(),
    title,
    content,
  };
  notes.push(newNote);
  res.json(newNote);
};

// GET /api/notes/:id - Retrieve a specific note by ID
const getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};

// GET /api/notes/search - Search for notes
const searchNotes = (req, res) => {
  const { q } = req.query;
  // Assuming you have the 'notes' array, you can filter the notes based on the search term (q)
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(q.toLowerCase()) ||
      note.content.toLowerCase().includes(q.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(q.toLowerCase()))
  );
  res.json(filteredNotes);
};

// PUT /api/notes/:id - Update a specific note by ID
const updateNoteById = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    const updatedNote = {
      id,
      title,
      content,
    };
    notes[noteIndex] = updatedNote;
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};

// DELETE /api/notes/:id - Delete a specific note by ID
const deleteNoteById = (req, res) => {
  const { id } = req.params;
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    const deletedNote = notes.splice(noteIndex, 1)[0];
    res.json(deletedNote);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};

module.exports = {
  searchNotes,
  getAllNotes,
  createNote,
  getNoteById,
  updateNoteById,
  deleteNoteById,
};
