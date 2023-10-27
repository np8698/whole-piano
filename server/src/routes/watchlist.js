const express = require('express');
const watchlistController = require('../contollers/watchlistController');

const router = express.Router();

// Add a movie to the watchlist
router.post('/add', watchlistController.addToWatchlist);

// Remove a movie from the watchlist
router.delete('/remove/:userId/:movieId', watchlistController.removeFromWatchlist);

// Update watch status
router.patch('/update/:userId/:movieId', watchlistController.updateWatchStatus);

// Get the user's watchlist
router.get('/:userId', watchlistController.getWatchlist);

module.exports = router;
