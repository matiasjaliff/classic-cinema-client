import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Plus = () => {
  const movieData = useSelector((state) => state.movie.data);

  return (
    <div className="w-[12vw] h-[12vw] flex items-center m-5 rounded-full bg-green-600/60 drop-shadow-2xl">
      <Link to={`/movie/${movieData.id}`} className="h-7/12 w-7/12 m-auto">
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </Link>
    </div>
  );
};

export default Plus;
