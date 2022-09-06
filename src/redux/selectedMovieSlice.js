import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  images: [],
  videos: [],
  credits: {},
  releaseDates: [],
};

export const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    setSelectedMovieData: (state, action) => {
      state.data = action.payload;
    },
    setSelectedMovieImages: (state, action) => {
      state.images = action.payload;
    },
    setSelectedMovieVideos: (state, action) => {
      state.videos = action.payload;
    },
    setSelectedMovieCredits: (state, action) => {
      state.credits = action.payload;
    },
    setSelectedMovieReleaseDates: (state, action) => {
      state.releaseDates = action.payload;
    },
  },
});

export const {
  setSelectedMovieData,
  setSelectedMovieImages,
  setSelectedMovieVideos,
  setSelectedMovieCredits,
  setSelectedMovieReleaseDates,
} = selectedMovieSlice.actions;

export const sendSelectedMovieRequest = (id) => (dispatch) => {
  axios
    .get(`http://localhost:8080/api/tmdb/${id}?language=en`)
    .then((res) => {
      console.log(res.data);
      dispatch(setSelectedMovieData(res.data));
    })
    .then(() =>
      axios.get(`http://localhost:8080/api/tmdb/${id}/images?language=en`)
    )
    .then((res) => {
      console.log(res.data.posters);
      dispatch(setSelectedMovieImages(res.data.posters));
    })
    .then(() =>
      axios.get(`http://localhost:8080/api/tmdb/${id}/videos?language=en`)
    )
    .then((res) => {
      console.log(res.data.results);
      dispatch(setSelectedMovieVideos(res.data.results));
    })
    .then(() =>
      axios.get(`http://localhost:8080/api/tmdb/${id}/credits?language=en`)
    )
    .then((res) => {
      console.log(res.data);
      dispatch(setSelectedMovieCredits(res.data));
    })
    .then(() => axios.get(`http://localhost:8080/api/tmdb/${id}/release`))
    .then((res) => {
      console.log(res.data);
      dispatch(setSelectedMovieReleaseDates(res.data));
    })
    .catch((err) => console.error(err));
};

export default selectedMovieSlice.reducer;
