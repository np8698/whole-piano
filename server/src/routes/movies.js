const express = require('express');
const moviesController = require('../contollers/movieController');

const router = express.Router();

router.get('/', moviesController.getMovies);
router.get('/:id', moviesController.getMovieById);

module.exports = router;