import { useEffect, useRef } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./views/Home";
import Movie from "./views/Movie";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";

import { useDispatch } from "react-redux";
import { sendMovieRequest } from "./redux/movieSlice";
import { sendCarrouselMoviesRequest } from "./redux/carrouselSlice";

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
      dispatch(sendCarrouselMoviesRequest());
      getFeaturedMovieId()
        .then((id) => dispatch(sendMovieRequest(id)))
        .catch((err) => console.error(err));
      effectRan.current = true;
    }
  }, []);

  return (
    <div id="app" className="bg-zinc-800 text-white">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
