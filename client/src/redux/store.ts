// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import watchlistReducer from './watchlistSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchlist: watchlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
