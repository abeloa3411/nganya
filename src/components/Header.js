import React from "react";
import { Link } from "react-router-dom";
import { FaShuttleVan } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="p-6 bg-white shadow-lg flex justify-between align-center h-20">
        <div>
          <h2 className="text-3xl font-bold">Nganya</h2>
        </div>
        <div>
          <input type="text" placeholder="Search van" className="p-2 w-80" />
        </div>
        <div>
          <nav>
            <ul className="flex">
              <li>
                <Link to="/booking">
                  <FaShuttleVan />
                </Link>
              </li>
              <li className="px-4 py-2 transition ease-in-out cursor-pointer rounded hover:bg-slate-300">
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
