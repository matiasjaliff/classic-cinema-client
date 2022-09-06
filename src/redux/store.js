import { configureStore } from "@reduxjs/toolkit";

import featuredMovieReducer from "./featuredMovieSlice";
import selectedMovieReducer from "./selectedMovieSlice";
import inTheatersMoviesReducer from "./inTheatersMoviesSlice";
import recommendedMoviesReducer from "./recommendedMovies";

export const store = configureStore({
  reducer: {
    featuredMovie: featuredMovieReducer,
    selectedMovie: selectedMovieReducer,
    inTheatersMovies: inTheatersMoviesReducer,
    recommendedMovies: recommendedMoviesReducer,
  },
});
