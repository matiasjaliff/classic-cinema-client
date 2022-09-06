import { useSelector } from "react-redux";

import GenreBadge from "../commons/GenreBadge";

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

  directors();

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
          <div className="h-[100vw] flex flex-col px-4 bg-gradient-to-b from-zinc-800">
            <p className="text-sm">
              {movieData.release_date.slice(0, 4)}
              <span className="mx-2 px-1 border rounded">
                {certification()}
              </span>
              {runtime()}
            </p>
            <p className="mt-1 text-3xl font-semibold">{movieData.title}</p>
            <p className="text-sm">{movieData.tagline}</p>
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
            <div className="mt-1 flex flex-row flew-wrap">
              <p className="mr-2 font-semibold">Stars</p>
              <p>
                {movieCredits.cast.length
                  ? movieCredits.cast
                      .slice(0, 3)
                      .map((star, index) =>
                        index < 2 ? star.name + ", " : star.name
                      )
                  : ""}
              </p>
            </div>
          </div>
          <div className="h-[50vw] flex flex-col-reverse bg-gradient-to-t from-zinc-800">
            <div className="flex flex-row-reverse">ICON</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Movie;
