import React from "react";

import * as FaIcons from "react-icons/fa";

import * as AiIcons from "react-icons/ai";

import {Link} from "react-router-dom"
import "./Topbar.css";
import {useModalContext} from "../../Context/ModalContext"

const Topbar = () => {

  const {setPostModal} = useModalContext()

  return (
    <nav className="nav w-full bg-light-bg" >
      <div className=" topbar px-8 py-4 relative  flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="topbar-left">
          <div className="logo flex ">
           <Link to="/feeds" className="flex items-center">
           <FaIcons.FaThumbsUp className="icons text-logo-icon mr-2 text-[#f7f7f7] " />
            <span className="font-bold text-[#f7f7f7] text-3xl">Like</span> </Link> 
          </div>
        </div>
        <div className="topbar-middle basis-72 md:basis-1/4">
          <div className="searchbar">
            <input 
              type="search"
              className="input rounded-full bg-dark-bg text-xl "
              placeholder="Search"
            />
          </div>
        </div>
        <div className="topbar-right">
          <div className="icons-wrapper md:flex">
            <ul className="mobile-bottom-icons fixed bottom-0 right-0 left-0 md:static">
              <li className="inline-block md:mr-6">
               <Link to="/feeds"> <FaIcons.FaHome className="icons nav-icons" /> </Link>
              </li>
              <li className="inline-block md:mr-6">
                <FaIcons.FaPlusCircle className="icons nav-icons" onClick={() => setPostModal(true)} />
              </li>
              <li className="inline-block md:mr-6">
                <FaIcons.FaCompass className="icons nav-icons" />
              </li>
              <li className="inline-block md:mr-6">
                <Link to="/profile"><FaIcons.FaUserCircle className="icons nav-icons" /></Link>
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
