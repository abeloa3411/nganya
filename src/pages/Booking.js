import React, { useEffect, useState } from "react";
import { VanState } from "../context/Context";

const Booking = () => {
  const [total, setTotal] = useState();

  const {
    state: { van },
    dispatch,
  } = VanState();

  useEffect(() => {
    const totalPrice = van.reduce((tot, cur) => {
      return (tot += Number(cur.price));
    }, 0);
    setTotal(totalPrice);
  }, [van]);
  return (
    <div className="pt-24 flex">
      <div className="booking ml-4">
        {van.map((item) => {
          const { id, image, title, capacity } = item;
          return (
            <div
              key={id}
              className="flex justify-between items-center pb-4 px-4"
            >
              <img
                className="h-48 w-72 object-cover rounded"
                src={image}
                alt={title}
              />
              <div className="flex ">
                <div>
                  <strong>{title}</strong>
                </div>
                <div>
                  <p>
                    <small>{capacity}</small>
                  </p>
                </div>
                <div>
                  <button
                    className="bg-green-100 btn rounded py-2 px-4 hover:bg-slate-300 ease-in-out text-black"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_VAN",
                        payload: item,
                      });
                    }}
                  >
                    Remove van
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-green-100 h-36 rounded color-black w-48 p-2">
        <div className="pb-2">
          <h3 className="text-2xl">Sub total</h3>
        </div>
        <div>
          <span className="pb-2">Total :</span>
          <p>
            <span>Ksh. </span>
            {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
