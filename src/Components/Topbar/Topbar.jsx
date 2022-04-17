import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Topbar.css";

const Topbar = () => {
  return (
    <nav className="nav w-full">
      <div className=" topbar px-8 py-4 relative  flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="topbar-left">
          <div className="logo flex items-center">
            <FaIcons.FaThumbsUp className="icons text-logo-icon mr-2" />
            <span className="text-logo-icon font-bold">Like</span>
          </div>
        </div>
        <div className="topbar-middle basis-72 md:basis-1/4">
          <div className="searchbar">
            <input 
              type="search"
              className="searchbar input bg-gray-100"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="topbar-right">
          <div className="icons-wrapper md:flex">
            <ul className="mobile-bottom-icons fixed bottom-0 right-0 left-0 md:static">
              <li className="inline-block md:mr-6">
                <FaIcons.FaHome className="icons nav-icons" />
              </li>
              <li className="inline-block md:mr-6">
                <FaIcons.FaPlus className="icons nav-icons" />
              </li>
              <li className="inline-block md:mr-6">
                <FaIcons.FaBell className="icons nav-icons" />
              </li>
              <li className="inline-block md:mr-6">
                <FaIcons.FaUserCircle className="icons nav-icons" />
              </li>
            </ul>
            <ul>
              <li className="inline-block md:mr-6">
                <FaIcons.FaSignOutAlt className="icons nav-icons" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Topbar };
