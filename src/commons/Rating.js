import React from "react";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating * 10);
  return (
    <div className="mt-4 bg-zinc-400/20">
      <div className="w-[78%] bg-green-500/40 pl-2 text-sm">
        {roundedRating} %
      </div>
    </div>
  );
};

export default Rating;
