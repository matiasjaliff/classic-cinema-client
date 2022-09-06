import { useEffect, useRef } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sendFeaturedMovieRequest } from "./redux/featuredMovieSlice";
import { sendInTheatersMoviesRequest } from "./redux/inTheatersMoviesSlice";

import "./App.css";

import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";

const getFeaturedMovieId = () => {
  return axios
    .get("http://localhost:8080/api/tmdb/featured")
    .then((featuredMovie) => featuredMovie.data.id)
    .catch((err) => console.error(err));
};

function App() {
  const effectRan = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!effectRan.current) {
      getFeaturedMovieId()
        .then((id) => dispatch(sendFeaturedMovieRequest(id)))
        .catch((err) => console.error(err));
      dispatch(sendInTheatersMoviesRequest());
      effectRan.current = true;
    }
  }, []);

  return (
    <div id="app" className="bg-zinc-800 text-white">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
