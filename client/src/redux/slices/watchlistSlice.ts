import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WatchlistMovie {
  id: number;
  title: string;
  watched: boolean;
  // ... other attributes you want
}

interface WatchlistState {
  watchlist: WatchlistMovie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WatchlistState = {
  watchlist: [],
  status: 'idle',
  error: null,
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<WatchlistMovie>) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      const index = state.watchlist.findIndex((movie) => movie.id === action.payload);
      if (index !== -1) {
        state.watchlist.splice(index, 1);
      }
    },
    markAsWatched: (state, action: PayloadAction<number>) => {
      const movie = state.watchlist.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.watched = true;
      }
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, markAsWatched } = watchlistSlice.actions;

export default watchlistSlice.reducer;
