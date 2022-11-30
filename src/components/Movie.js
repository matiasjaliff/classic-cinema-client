import { useSelector } from "react-redux";
import { HeartIcon as OutlinedHeartIcon} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon, PlayIcon } from "@heroicons/react/24/solid";

import GenreBadge from "../commons/GenreBadge";
import StarBadge from "../commons/StarBadge";
import RatingBadge from "../commons/RatingBadge";

const Movie = () => {
  const movieData = useSelector((state) => state.selectedMovie.data);
  const movieImages = useSelector((state) => state.selectedMovie.images);
  const movieVideos = useSelector((state) => state.selectedMovie.video);
  const movieCredits = useSelector((state) => state.selectedMovie.credits);
  const movieReleaseDates = useSelector(
    (state) => state.selectedMovie.releaseDates
  );

  const certification = () => {
    if (movieReleaseDates.length) {
      const certification = movieReleaseDates.filter(
        (country) => country.iso_3166_1 === "US"
      )[0].release_dates[0].certification;
      return certification ? certification : "NR";
    } else return "NR";
  };

  const runtime = () => {
    if (movieData.runtime) {
      const runtime = movieData.runtime;
      const hours = Math.floor(runtime / 60);
      const minutes = runtime - hours * 60;
      return `${hours}h ${minutes}m`;
    } else return "";
  };

  const directors = () => {
    if (movieCredits.crew) {
      return movieCredits.crew.filter((person) => person.job === "Director");
    } else return [];
  };

  return (
    <div
      id="movie"
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
          <div className="h-[100vw] flex flex-col px-4 bg-gradient-to-b from-zinc-800 via-zinc-600/70">
            <div className="flex flex-row">
              <div className="flex flex-col w-5/6">
                <p className="text-sm">
                  {movieData.release_date.slice(0, 4)}
                  <span className="mx-2 px-1 border rounded">
                    {certification()}
                  </span>
                  {runtime()}
                </p>
                <p className="mt-1 text-3xl font-semibold">{movieData.title}</p>
                <p className="text-sm">{movieData.tagline}</p>
              </div>
              <div className="w-1/6 flex flex-col items-end">
                <RatingBadge rating={movieData.vote_average} />
              </div>
            </div>
            <div id="genres" className="pt-2 flex flex-row flex-wrap">
              {movieData.genres.map((genre) => (
                <GenreBadge genre={genre.name} key={genre.id} />
              ))}
            </div>
            <div className="mt-2 flex flex-row">
              <p className="mr-2 font-semibold">Director</p>
              <p>
                {directors().length
                  ? directors().map((director) => director.name)
                  : ""}
              </p>
            </div>
            <div className="mt-1 flex flex-row">
              <p className="mr-2 font-semibold">Stars</p>
              <div className="flex flex-row flex-wrap">
                {Object.keys(movieCredits).length
                  ? movieCredits.cast
                      .slice(0, 3)
                      .map((star, index) => (
                        <StarBadge star={star.name} index={index} key={index} />
                      ))
                  : ""}
              </div>
            </div>
          </div>
          <div className="h-[50vw] flex flex-col-reverse bg-gradient-to-t from-zinc-800">
            <div className="flex flex-row-reverse mb-4">
              <div className="w-1/4 flex flex-col items-center">
                {/* <SolidHeartIcon className="w-14 mb-2 stroke-orange-500/70 fill-orange-500/70" /> */}
                <OutlinedHeartIcon className="w-14 mb-2 stroke-orange-500/70" />
                <PlayIcon className="w-14 stroke-orange-500/70 fill-orange-500/70" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Movie;
