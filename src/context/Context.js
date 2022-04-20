import React, { createContext, useContext, useReducer } from "react";
import { vansArr } from "../data";
import { productReducer, vanreducer } from "./Reducers";

const Van = createContext();

const Context = ({ children }) => {
  const vans = vansArr.map(
    ({ id, title, image, price, capacity, rate, booked }) => {
      return {
        id: id,
        title: title,
        image: image,
        price: price,
        capacity: capacity,
        rate: rate,
        booked: booked,
      };
    }
  );

  const [state, dispatch] = useReducer(vanreducer, {
    vans: vans,
    van: [],
  });
  const [vanstate, vanDispatch] = useReducer(productReducer, {
    byBooked: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Van.Provider value={{ state, dispatch, vanstate, vanDispatch }}>
      {children}
    </Van.Provider>
  );
};

export default Context;

export const VanState = () => {
  return useContext(Van);
};
