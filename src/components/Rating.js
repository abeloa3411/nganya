import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
  return (
    <div className="flex py-4">
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => onClick(i)}>
            {rating > i ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
