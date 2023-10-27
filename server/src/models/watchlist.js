const mongoose = require('mongoose');
const { Schema } = mongoose;

const watchlistSchema = new Schema({
  userId: { type: String, required: true },  // Assuming a simple string user ID for demonstration
  movies: [{ 
    movieId: Number,
    title: String,
    watched: Boolean
  }]
});

module.exports = mongoose.model('Watchlist', watchlistSchema);
