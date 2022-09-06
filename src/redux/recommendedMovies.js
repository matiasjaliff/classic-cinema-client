import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
};

export const recommendedMoviesSlice = createSlice({
  name: "recommended",
  initialState,
  reducers: {
    setRecommendedMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setRecommendedMovies } = recommendedMoviesSlice.actions;

export const sendRecommendedMoviesRequest = (id) => (dispatch) => {
  axios
    .get(`http://localhost:8080/api/tmdb/${id}/recommendations?language=en&page=1`)
    .then((res) => {
      console.log(res.data);
      dispatch(setRecommendedMovies(res.data));
    })
    .catch((err) => console.error(err));
};

export default recommendedMoviesSlice.reducer;
