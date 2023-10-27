const Watchlist = require('../models/watchlist');

exports.addToWatchlist = async (req, res) => {
  try {
    const { userId, movie } = req.body;
    let watchlist = await Watchlist.findOne({ userId });

    if (!watchlist) {
      watchlist = new Watchlist({ userId, movies: [movie] });
    } else {
      watchlist.movies.push(movie);
    }

    await watchlist.save();
    res.status(201).json(watchlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeFromWatchlist = async (req, res) => {
  try {
    const { userId, movieId } = req.params;
    const watchlist = await Watchlist.findOne({ userId });

    if (watchlist) {
      watchlist.movies = watchlist.movies.filter(movie => movie.movieId !== parseInt(movieId));
      await watchlist.save();
      res.status(200).json(watchlist);
    } else {
      res.status(404).send('Watchlist not found.');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateWatchStatus = async (req, res) => {
  try {
    const { userId, movieId } = req.params;
    const { watched } = req.body; // expected boolean
    const watchlist = await Watchlist.findOne({ userId });

    if (watchlist) {
      let movie = watchlist.movies.find(movie => movie.movieId === parseInt(movieId));
      if (movie) {
        movie.watched = watched;
        await watchlist.save();
        res.status(200).json(watchlist);
      } else {
        res.status(404).send('Movie not found in watchlist.');
      }
    } else {
      res.status(404).send('Watchlist not found.');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWatchlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const watchlist = await Watchlist.findOne({ userId });

    if (watchlist) {
      res.status(200).json(watchlist);
    } else {
      res.status(404).send('Watchlist not found.');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
