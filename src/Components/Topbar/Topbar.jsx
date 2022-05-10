import React from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom"
import "./Topbar.css";
import {useModalContext} from "../../Context/ModalContext"

const Topbar = () => {

  const {setPostModal} = useModalContext()

  return (
    <nav className="nav w-full bg-[#070f1f]" >
      <div className=" topbar px-8 py-4 relative  flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="topbar-left">
          <div className="logo flex ">
           <Link to="/feeds" className="flex items-center"><FaIcons.FaThumbsUp className="icons text-[#f7f7f7] text-logo-icon mr-2" />
            <span className="text-logo-icon font-bold text-[#f7f7f7]">Like</span> </Link> 
          </div>
        </div>
        <div className="topbar-middle basis-72 md:basis-1/4">
          <div className="searchbar">
            <input 
              type="search"
              className="input rounded-full bg-[#1a202c] text-xl "
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
                <FaIcons.FaPlus className="icons nav-icons" onClick={() => setPostModal(true)} />
              </li>
              <li className="inline-block md:mr-6">
                <FaIcons.FaBell className="icons nav-icons" />
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
