import { useState } from "react";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <>
            <button
              // key={index}
              className={index <= rating ? "on" : "off"}
              onClick={(e) => {
                console.log(index, "index");
                setRating(index);
              }}
              onMouseEnter={() => setRating(index)}
              onMouseLeave={() => setHover(rating - 1)}
            >
              <span>&#9733;</span>
            </button>
          </>
        );
      })}
    </div>
  );
};

export default StarRating;
