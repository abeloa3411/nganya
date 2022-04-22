import React from "react";
import { VanState } from "../context/Context";

const Booking = () => {
  const {
    state: { van },
  } = VanState();
  console.log(van);
  return (
    <div className="pt-24">
      {van.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
};

export default Booking;
