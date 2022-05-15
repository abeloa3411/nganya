import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShuttleVan } from "react-icons/fa";
import { VanState } from "../context/Context";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, []);

  const scrollNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    }
    setScroll(false);
  };
  const {
    vanDispatch,
    state: { van },
  } = VanState();
  return (
    <div className="fixed w-full">
      <div className="bg-green-100 p-6 bg-white shadow-lg flex justify-between align-center h-20">
        <div>
          <h2 className="text-3xl">
            <Link to="/">Nganya</Link>
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search van"
            className="p-2 w-80 rounded outline-none"
            onChange={(e) => {
              vanDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex items-center">
          <div className="pt-2 flex items-center">
            <p className="px-2">{van.length}</p>
            <Link to="/booking">
              <FaShuttleVan style={{ fontSize: "25px" }} />
            </Link>
          </div>
          <div className="px-4 py-2 transition ease-in-out cursor-pointer rounded hover:bg-slate-300">
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
