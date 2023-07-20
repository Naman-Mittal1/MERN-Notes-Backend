// tagsController.js

// Sample array to simulate a database
let tags = [];

// GET /api/tags - Retrieve all tags
const getAllTags = (req, res) => {
  res.json(tags);
};

// POST /api/tags - Create a new tag
const createTag = (req, res) => {
  const { name } = req.body;
  const newTag = {
    id: Date.now().toString(),
    name,
  };
  tags.push(newTag);
  res.json(newTag);
};

// GET /api/tags/:id - Retrieve a specific tag by ID
const getTagById = (req, res) => {
  const { id } = req.params;
  const tag = tags.find((tag) => tag.id === id);
  if (tag) {
    res.json(tag);
  } else {
    res.status(404).json({ message: 'Tag not found' });
  }
};

// PUT /api/tags/:id - Update a specific tag by ID
const updateTagById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const tagIndex = tags.findIndex((tag) => tag.id === id);
  if (tagIndex !== -1) {
    const updatedTag = {
      id,
      name,
    };
    tags[tagIndex] = updatedTag;
    res.json(updatedTag);
  } else {
    res.status(404).json({ message: 'Tag not found' });
  }
};

// DELETE /api/tags/:id - Delete a specific tag by ID
const deleteTagById = (req, res) => {
  const { id } = req.params;
  const tagIndex = tags.findIndex((tag) => tag.id === id);
  if (tagIndex !== -1) {
    const deletedTag = tags.splice(tagIndex, 1)[0];
    res.json(deletedTag);
  } else {
    res.status(404).json({ message: 'Tag not found' });
  }
};

module.exports = {
  getAllTags,
  createTag,
  getTagById,
  updateTagById,
  deleteTagById,
};
