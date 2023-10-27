import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovieToWatchlist } from '../redux/slices/watchlistSlice';

interface MovieDetailsProps {
  movie: {
    id: number;
    title: string;
    // ... other movie properties
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddToWatchlist = () => {
    dispatch(addMovieToWatchlist(movie));
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      {/* Add other movie details here */}
      <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
    </div>
  );
};

export default MovieDetails;
