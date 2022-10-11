import React from "react";
import { Link } from "react-router-dom";
import { IoIosHelp } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <div className="fixed w-full">
      <div className="bg-green-100 p-6 bg-white shadow-lg flex justify-between items-center h-20">
        <div className="flex">
          <h2 className="text-3xl mr-2">
            <Link to="/">Nganya</Link>
          </h2>
          <div className="flex items-center justyfy-center">
            <ul className="mx-4">
              <li>
                <Link to="/home">Box</Link>
              </li>
            </ul>
            <ul className="mx-4">
              <li>
                <Link to="/">Trains</Link>
              </li>
            </ul>
            <ul className="mx-4">
              <li>
                <Link to="/">Flights</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <Link to="/booking">Help</Link>
            <IoIosHelp style={{ fontSize: "25px" }} />
          </div>
          <div className="flex items-center ml-2 px-4 py-2">
            <Link to="/login">Manage account</Link>
            <FiUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
