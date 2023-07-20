const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose library

const notesRoutes = require('./routes/notesRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const tagsRoutes = require('./routes/tagsRoutes');

require('dotenv').config();


const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/notes', notesRoutes);
app.use('/api/categories', categoriesRoutes); // Use the categories routes
app.use('/api/tags', tagsRoutes); // Use the tags routes

const port = 4000; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});