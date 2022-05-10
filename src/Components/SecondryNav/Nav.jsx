import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav w-full bg-[#070f1f]">
      <div className=" topbar px-8 py-4 relative  flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="topbar-left">
          <div className="logo flex ">
            <Link to="/feeds" className="flex items-center">
              <FaIcons.FaThumbsUp className="icons text-[#f7f7f7] text-logo-icon mr-2" />
              <span className="text-logo-icon font-bold text-[#f7f7f7]">
                Like
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
