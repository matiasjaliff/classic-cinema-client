import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Carrousel from "../components/Carrousel";

const MovieDetails = () => {
  return (
    <div id="movie">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="content">
        <Movie />
        <Carrousel list="Recommended" />
      </div>
    </div>
  );
};

export default MovieDetails;
