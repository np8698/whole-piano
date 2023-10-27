const axios = require('axios');
const Movie = require('../models/movie');

exports.getMovies = async (req, res) => {
  try {
    const { page } = req.query;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b96b0b43182bf56a726941d13a11d5cd&page=${page}`);
    // extract necessary fields and save to MongoDB if needed
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b96b0b43182bf56a726941d13a11d5cd`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
