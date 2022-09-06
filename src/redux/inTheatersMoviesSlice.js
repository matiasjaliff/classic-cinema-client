import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
};

export const inTheatersMoviesSlice = createSlice({
  name: "inTheaters",
  initialState,
  reducers: {
    setInTheatersMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setInTheatersMovies } = inTheatersMoviesSlice.actions;

export const sendInTheatersMoviesRequest = () => (dispatch) => {
  axios
    .get(`http://localhost:8080/api/tmdb/inTheaters`)
    .then((res) => {
      console.log(res.data);
      dispatch(setInTheatersMovies(res.data));
    })
    .catch((err) => console.error(err));
};

export default inTheatersMoviesSlice.reducer;
