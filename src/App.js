import { useEffect, useRef } from "react";
import axios from "axios";

import "./App.css";

import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";

import { useDispatch } from "react-redux";
import { sendMovieRequest } from "./redux/movieSlice";

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
        .then((id) => dispatch(sendMovieRequest(id)))
        .catch((err) => console.error(err));
      effectRan.current = true;
    }
  }, []);

  return (
    <div id="app" className="bg-zinc-800 text-white">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="content">
        <Featured />
        <Carrousel />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
