import React from "react";

import { useSelector } from "react-redux";

import MiniPoster from "../commons/MiniPoster";

const Carrousel = ({ list }) => {
  const movies = useSelector((state) =>
    list === "In theaters" || !state.recommendedMovies.movies.length
      ? state.inTheatersMovies.movies
      : state.recommendedMovies.movies
  );

  return (
    <div id="carrousel" className="pl-4 pt-6">
      <p className="font-semibold">{list}</p>
      <div className="flex flex-row pt-2 space-x-2 overflow-auto scroll-smooth">
        {movies.length ? (
          movies.map((movie) => (
            <MiniPoster
              movieId={movie.id}
              imageUrl={movie.posters[0].file_path}
              key={movie.id}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Carrousel;
