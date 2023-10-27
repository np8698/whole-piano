import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/slices/moviesSlice';
import { RootState } from '../redux/store';

interface Movie {
  id: number;
  title: string;
  // ... other movie properties
}

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page, dispatch]);

  return (
    <div>
      {movies.map((movie: Movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          {/* Add other movie details here */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
