import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  images: [],
  videos: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.data = action.payload;
    },
    setMovieImages: (state, action) => {
      state.images = action.payload;
    },
    setMovieVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { setMovieData, setMovieImages, setMovieVideos } = movieSlice.actions;

export const sendMovieRequest = (id) => (dispatch) => {
  axios
    .get(`http://localhost:8080/api/tmdb/${id}?language=en`)
    .then((res) => {
      console.log(res.data);
      dispatch(setMovieData(res.data));
    })
    .then(() => axios.get(`http://localhost:8080/api/tmdb/${id}/images?language=en`))
    .then((res) => {
      console.log(res.data.posters);
      dispatch(setMovieImages(res.data.posters))
    })
    .then(() => axios.get(`http://localhost:8080/api/tmdb/${id}/videos?language=en`))
    .then((res) => {
      console.log(res.data.results);
      dispatch(setMovieVideos(res.data.results))
    })
    .catch((err) => console.error(err));
};

export default movieSlice.reducer;
