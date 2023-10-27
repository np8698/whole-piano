import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'; // import your store's RootState
import { removeFromWatchlist, markAsWatched } from '../redux/slices/watchlistSlice';

const Watchlist: React.FC = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist.movies);

  return (
    <div className="container">
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <div>
                <button onClick={() => dispatch(markAsWatched(movie.id))}>
                  Mark as Watched
                </button>
                <button onClick={() => dispatch(removeFromWatchlist(movie.id))}>
                  Remove from Watchlist
                </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
