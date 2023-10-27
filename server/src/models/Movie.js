const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: Number,
  title: String,
  // ... other fields you want to store for a movie
});

module.exports = mongoose.model('Movie', movieSchema);
