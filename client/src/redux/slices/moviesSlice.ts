import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: number;
  title: string;
  // ... other attributes you want
}

interface MoviesState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesStart: (state) => {
      state.status = 'loading';
    },
    fetchMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.status = 'succeeded';
      state.movies = action.payload;
    },
    fetchMoviesFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } = moviesSlice.actions;

export default moviesSlice.reducer;
