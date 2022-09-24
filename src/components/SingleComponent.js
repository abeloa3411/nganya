import React from "react";
import { useParams } from "react-router-dom";
import { VanState } from "../context/Context";

const SingleComponent = () => {
  const { id } = useParams();
  const {
    state: { vans },
  } = VanState();
  // console.log(console.log(vans[id]));
  return (
    <div>
      {vans.filter((item) => {
        console.log(item.id === id);
        return item.id === id;
      })}
    </div>
  );
};

export default SingleComponent;
