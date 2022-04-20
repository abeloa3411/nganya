import React from "react";
import { VanState } from "../context/Context";
import "../style.css";
import Filter from "./Filter";
import Rating from "./Rating";

const Hero = () => {
  const {
    state: { vans },
    vanstate: { byRating },
  } = VanState();

  const transformVans = () => {
    let products = vans;

    if (byRating) {
      products = products.filter((prod) => prod.rate >= byRating);
    }

    return products;
  };
  return (
    <div className="flex">
      <div className="sidebar">
        <Filter />
      </div>
      <div className="main">
        {transformVans().map((van) => {
          return (
            <div key={van.id} className=" my-4 bg-white rounded-xl shadow-md">
              <div className="flex justify-between align-middle">
                <div className="h-full">
                  <img
                    className="h-48 w-full object-cover rounded md:h-full md:w-48"
                    src={van.image}
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {van.title}
                  </div>
                  <small className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    Ksh. {van.price}
                  </small>
                  <p className="mt-2 text-gray-500">{van.capacity} seats</p>
                </div>
                <div className="flex align-middle ">
                  <Rating rating={van.rate} />
                </div>
                <div>{van.booked ? <p>booked</p> : <p>available</p>}</div>
                <div>
                  <button
                    disabled={van.booked}
                    className="btn rounded py-2 px-4 hover:bg-slate-300 ease-in-out text-black"
                  >
                    {van.booked === true ? "already booked" : "book now"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
