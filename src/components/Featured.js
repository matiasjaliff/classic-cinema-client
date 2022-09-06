import { useSelector } from "react-redux";

import GenreBadge from "../commons/GenreBadge";
import Rating from "../commons/Rating";
import Plus from "../icons/Plus";

const Featured = () => {
  const movieData = useSelector((state) => state.featuredMovie.data);
  const movieImages = useSelector((state) => state.featuredMovie.images);
  // const movieVideos = useSelector((state) => state.featuredMovie.video);

  return (
    <div
      id="featured"
      className="h-[150vw] flex flex-col justify-between bg-contain bg-center"
      style={
        movieImages.length
          ? {
              backgroundImage: `url(http://image.tmdb.org/t/p/original${movieImages[0].file_path})`,
            }
          : {}
      }
    >
      {movieData.id ? (
        <div>
          <div className="h-[100vw] flex flex-col px-4 bg-gradient-to-b from-zinc-800">
            <p className="mt-4 text-l font-semibold">Featured today</p>
            <p className="mt-2 text-3xl font-semibold">{movieData.title}</p>
            <div id="yearAndGenres" className="flex flex-row pt-2">
              <p className="text-sm">{movieData.release_date.slice(0, 4)}</p>
              <div id="genres" className="pl-2 flex flex-row flex-wrap">
                {movieData.genres.map((genre) => (
                  <GenreBadge genre={genre.name} key={genre.id} />
                ))}
              </div>
            </div>
            <Rating rating={movieData.vote_average} />
          </div>
          <div className="h-[50vw] flex flex-col-reverse bg-gradient-to-t from-zinc-800">
            <div className="flex flex-row-reverse">
              <Plus />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Featured;
