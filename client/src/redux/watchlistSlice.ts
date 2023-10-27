// src/redux/watchlistSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    addMovieToWatchlist: (state, action) => {
      state.push(action.payload);
    },
    removeMovieFromWatchlist: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
    markMovieAsWatched: (state, action) => {
      const index = state.findIndex((movie) => movie.id === action.payload.id);
      if (index !== -1) {
        state[index].watched = true;
      }
    },
  },
});

export const { addMovieToWatchlist, removeMovieFromWatchlist, markMovieAsWatched } = watchlistSlice.actions;

export default watchlistSlice.reducer;
