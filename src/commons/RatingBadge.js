const RatingBadge = ({ rating }) => {
  const roundedRating = Math.round(rating * 10);

  return (
    <div className="h-bg-green-500/70">
      <p className="text-sm font-semibold text-center">
        {roundedRating}
        <span className="text-[0.5rem]">%</span>
      </p>
    </div>
  );
};

export default RatingBadge;
