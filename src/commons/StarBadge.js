const StarBadge = ({ star, index }) => {
  return (
  <div className="pr-1">{index < 2 ? star + "," : star}</div>
    );
};

export default StarBadge;
