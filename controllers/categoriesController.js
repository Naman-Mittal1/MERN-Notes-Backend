// categoriesController.js

// Sample array to simulate a database
let categories = [];

// GET /api/categories - Retrieve all categories
const getAllCategories = (req, res) => {
  res.json(categories);
};

// POST /api/categories - Create a new category
const createCategory = (req, res) => {
  const { name } = req.body;
  const newCategory = {
    id: Date.now().toString(),
    name,
  };
  categories.push(newCategory);
  res.json(newCategory);
};

// GET /api/categories/:id - Retrieve a specific category by ID
const getCategoryById = (req, res) => {
  const { id } = req.params;
  const category = categories.find((category) => category.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
};

// PUT /api/categories/:id - Update a specific category by ID
const updateCategoryById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const categoryIndex = categories.findIndex((category) => category.id === id);
  if (categoryIndex !== -1) {
    const updatedCategory = {
      id,
      name,
    };
    categories[categoryIndex] = updatedCategory;
    res.json(updatedCategory);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
};

// DELETE /api/categories/:id - Delete a specific category by ID
const deleteCategoryById = (req, res) => {
  const { id } = req.params;
  const categoryIndex = categories.findIndex((category) => category.id === id);
  if (categoryIndex !== -1) {
    const deletedCategory = categories.splice(categoryIndex, 1)[0];
    res.json(deletedCategory);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
