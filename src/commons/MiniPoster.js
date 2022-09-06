import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendSelectedMovieRequest } from "../redux/selectedMovieSlice";
import { sendRecommendedMoviesRequest } from "../redux/recommendedMovies";

const MiniPoster = ({ movieId, imageUrl }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/movie/${movieId}`}>
      <div
        className="w-[24vw] h-[36vw] bg-contain bg-center"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/w154${imageUrl})`,
        }}
        onClick={() => {
          dispatch(sendSelectedMovieRequest(movieId));
          dispatch(sendRecommendedMoviesRequest(movieId));
        }}
      ></div>
    </Link>
  );
};

export default MiniPoster;
