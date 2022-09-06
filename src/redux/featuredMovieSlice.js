import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  images: [],
  videos: [],
};

export const featuredMovieSlice = createSlice({
  name: "featuredMovie",
  initialState,
  reducers: {
    setFeaturedMovieData: (state, action) => {
      state.data = action.payload;
    },
    setFeaturedMovieImages: (state, action) => {
      state.images = action.payload;
    },
    setFeaturedMovieVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const {
  setFeaturedMovieData,
  setFeaturedMovieImages,
  setFeaturedMovieVideos,
} = featuredMovieSlice.actions;

export const sendFeaturedMovieRequest = (id) => (dispatch) => {
  axios
    .get(`http://localhost:8080/api/tmdb/${id}?language=en`)
    .then((res) => {
      console.log(res.data);
      dispatch(setFeaturedMovieData(res.data));
    })
    .then(() =>
      axios.get(`http://localhost:8080/api/tmdb/${id}/images?language=en`)
    )
    .then((res) => {
      console.log(res.data.posters);
      dispatch(setFeaturedMovieImages(res.data.posters));
    })
    .then(() =>
      axios.get(`http://localhost:8080/api/tmdb/${id}/videos?language=en`)
    )
    .then((res) => {
      console.log(res.data.results);
      dispatch(setFeaturedMovieVideos(res.data.results));
    })
    .catch((err) => console.error(err));
};

export default featuredMovieSlice.reducer;
