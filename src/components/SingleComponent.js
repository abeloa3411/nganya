import React from "react";
import { Link, useParams } from "react-router-dom";
import { VanState } from "../context/Context";
import Rating from "./Rating";

const SingleComponent = () => {
  const { id } = useParams();
  const {
    state: { vans },
    dispatch,
  } = VanState();

  return (
    <div className="pt-24">
      <div className="w-full flex justify-center">
        <img src={vans[id].image} alt={vans[id.title]} className="image" />
      </div>
      <div className="w-3/4 m-auto pl-8 flex pb-8">
        <div className="w-1/2">
          <h1 className="text-3xl">{vans[id].capacity} pass.</h1>
          <h1>Ksh. {vans[id].price}</h1>
          <Rating rating={vans[id].rate} />
          <h1>Ksh. {vans[id].description}</h1>
        </div>
        <div className="ml-8 flex mt-4">
          <div className="w-1/2">
            <p className="text-2xl">Comments</p>
          </div>
          <div>
            <input type="text" className="bg-sky-100 px-4 py-2" />
            <button>Add comment</button>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Link to={"/booking"}>
          <button
            className="bg-green-100 btn rounded py-2 px-4 hover:bg-slate-300 ease-in-out text-black"
            onClick={() => {
              dispatch({
                type: "ADD_VAN",
                payload: vans[id],
              });
            }}
          >
            Book van
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleComponent;
