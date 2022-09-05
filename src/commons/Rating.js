import React from "react";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating * 10);
  const width = Math.round(roundedRating * 12 / 100).toString();
  return (
    <div className="mt-2 bg-zinc-400/20">
      <div className={`w-${width}/12 bg-green-500/40 pl-2 text-sm`}>
        {roundedRating} %
      </div>
    </div>
  );
};

export default Rating;
