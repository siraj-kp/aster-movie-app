import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    movie: {},
    loading: true,
  },
  reducers: {
    getMovies(state) {
      return state;
    },
    setMovies: (state, action) => {
      state.movieList = action.payload;
      state.loading = false;
    },

    getMovie(state) {
      return state;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    },
  },
});

export const { getMovies, setMovies, getMovie, setMovie } = movieSlice.actions;

export default movieSlice.reducer;
