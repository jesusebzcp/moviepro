import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie} from './types';

interface MovieSlice {
  loading: boolean;
  moviePopular: [] | Movie[];
  movieSimilar: [] | Movie[];
  movieSearch: [] | Movie[];
}

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    loading: false,
    moviePopular: [],
    movieSimilar: [],
  } as MovieSlice,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setMoviePopulate(state, action: PayloadAction<Movie[] | []>) {
      state.moviePopular = action.payload;
    },

    setMovieSimilar(state, action: PayloadAction<Movie[] | []>) {
      state.movieSimilar = action.payload;
    },
    setMovieSearch(state, action: PayloadAction<Movie[] | []>) {
      state.movieSearch = action.payload;
    },
  },
});

export const {setLoading, setMoviePopulate, setMovieSimilar, setMovieSearch} =
  movieSlice.actions;
export default movieSlice.reducer;
