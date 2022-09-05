import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movieSlice";
import carrouselReducer from "./carrouselSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    carrousel: carrouselReducer,
  },
});
