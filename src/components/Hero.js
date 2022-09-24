import React from "react";
import { VanState } from "../context/Context";
import "../style.css";
import Filter from "./Filter";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Hero = () => {
  const {
    state: { vans },
    dispatch,
    vanstate: { byRating, searchQuery },
  } = VanState();

  const transformVans = () => {
    let products = vans;

    if (byRating) {
      products = products.filter((prod) => prod.rate >= byRating);
    }

    if (searchQuery) {
      products = products.filter((prod) => {
        return prod.title.toLowerCase().includes(searchQuery);
      });
    }

    return products;
  };
  return (
    <div className="flex pt-24">
      <div className="sidebar bg-green-100">
        <Filter />
      </div>
      <div className="main">
        {transformVans().map((van) => {
          return (
            <div key={van.id} className=" my-4 bg-white rounded-xl shadow-md">
              <div className="flex justify-between items-center">
                <div className="h-full">
                  <img
                    className="h-48 w-72 object-cover rounded"
                    src={van.image}
                    alt={van.title}
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
                <div className="px-4">
                  <Link to={`/single/${van.id}`}>
                    <button
                      disabled={van.booked}
                      className="bg-green-100 btn rounded py-2 px-4 hover:bg-slate-300 ease-in-out text-black"
                      // onClick={() => {
                      //   dispatch({
                      //     type: "ADD_VAN",
                      //     payload: van,
                      //   });
                      // }}
                    >
                      {van.booked === true ? "already booked" : "book now"}
                    </button>
                  </Link>
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
