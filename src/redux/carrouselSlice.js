import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
};

export const carrouselSlice = createSlice({
  name: "carrousel",
  initialState,
  reducers: {
    setCarrouselMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setCarrouselMovies } = carrouselSlice.actions;

export const sendCarrouselMoviesRequest = () => (dispatch) => {
  axios
    .get(`http://localhost:8080/api/tmdb/inTheaters`)
    .then((res) => {
      console.log(res.data);
      dispatch(setCarrouselMovies(res.data));
    })
    .catch((err) => console.error(err));
};

export default carrouselSlice.reducer;
