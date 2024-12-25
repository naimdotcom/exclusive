import { EmptyStar, FullStar, HalfStar } from "../../utils/assets";

const Star = ({ rating = 3.5 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <img key={index} src={FullStar} alt="" />;
    } else if (rating >= index + 0.5) {
      return <img key={index} src={HalfStar} alt="" />;
    } else {
      return <img key={index} src={EmptyStar} alt="" />;
    }
  });
  return (
    <div key={rating} className="flex items-center gap-x-1">
      {stars}
    </div>
  );
};

export default Star;
