import React from "react";
import { Link } from "react-router-dom";

const MiniPoster = ({ movieId, imageUrl }) => {
  return (
    <Link to={`/movie/${movieId}`}>
      <div
        className="w-[24vw] h-[36vw] bg-contain bg-center"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/w154${imageUrl})`,
        }}
      ></div>
    </Link>
  );
};

export default MiniPoster;
