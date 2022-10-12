import React, { createContext, useContext, useReducer } from "react";
import { vansArr } from "../data";
import { productReducer, vanreducer, userReducer } from "./Reducers";

const Van = createContext();

const Context = ({ children }) => {
  const vans = vansArr.map(
    ({ id, title, image, price, capacity, rate, booked, description }) => {
      return {
        id,
        title,
        image,
        price,
        description,
        capacity,
        rate,
        booked,
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

  const [userState, userDispatch] = useReducer(userReducer, {
    user: null,
  });

  return (
    <Van.Provider
      value={{
        state,
        dispatch,
        vanstate,
        vanDispatch,
        userState,
        userDispatch,
      }}
    >
      {children}
    </Van.Provider>
  );
};

export default Context;

export const VanState = () => {
  return useContext(Van);
};
