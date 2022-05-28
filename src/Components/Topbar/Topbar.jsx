import React, { useCallback, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Topbar.css";
import { useModalContext } from "../../Context/ModalContext";
import { logoutHandler } from "../../Store/Slice/AuthSlice";
import { useDispatch } from "react-redux";
import { SearchResult } from "../../Components/SearchResult/SearchResult";
import debounce from "lodash.debounce";
import { useRef } from "react";

const Topbar = () => {
  const { setPostModal } = useModalContext();
  const dispatch = useDispatch();

  const logoutUserHandler = () => {
    dispatch(logoutHandler());
  };

  // Implementing search Filter feature
  const [searchTerm, setSearchTerm] = useState({ query: "" });
  const [showSearchResult, setShowSearchResult] = useState(false);

  const SearchInputHandler = (event) => {
    if (/^\s/.test(event.target.value)) {
      setShowSearchResult(false);
      return;
    } else {
      if (event.target.value.length > 0) {
        setShowSearchResult(true);
        setSearchTerm((prev) => ({ ...prev, query: event.target.value }));
      } else {
        setShowSearchResult(false);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(
    debounce(SearchInputHandler, 500),
    []
  );

  const inputRef = useRef();

  return (
    <nav className="nav w-full bg-light-bg fixed top-0 left-0 right-0">
      <div className=" topbar px-8 py-4 relative  flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="topbar-left">
          <div className="logo flex ">
            <Link to="/feeds" className="flex items-center">
              <AiIcons.AiFillLike className="icons text-logo-icon mr-2 text-[#f7f7f7] " />
              <span className="font-bold text-[#f7f7f7] text-3xl">Like</span>{" "}
            </Link>
          </div>
        </div>
        <div className="topbar-middle basis-72 md:basis-1/4">
          <div className="searchbar relative">
            <input
              type="search"
              className="input rounded-full bg-dark-bg text-xl"
              placeholder="Search"
              onChange={debouncedChangeHandler}
            />

            {showSearchResult && (
              <SearchResult
                searchQuery={searchTerm}
                setSearchTerm={setSearchTerm}
                setShowSearchResult={setShowSearchResult}
                inputRef={inputRef}
              />
            )}
          </div>
        </div>
        <div className="topbar-right">
          <div className="icons-wrapper md:flex">
            <ul className="mobile-bottom-icons fixed bottom-0 right-0 left-0 md:static">
              <li className="inline-block md:mr-6">
                <NavLink
                  to="/feeds"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "#070f1f",
                  })}
                >
                  <FaIcons.FaHome className="icons nav-icons" />{" "}
                </NavLink>
              </li>
              <li className="inline-block md:mr-6">
                <FaIcons.FaPlusCircle
                  className="icons nav-icons"
                  onClick={() => setPostModal(true)}
                />
              </li>
              <li className="inline-block md:mr-6">
                <NavLink
                  to="/explore"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "#070f1f",
                  })}
                >
                  <FaIcons.FaCompass className="icons nav-icons" />
                </NavLink>
              </li>
              <li className="inline-block md:mr-6">
                <NavLink
                  to="/bookmark"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "#070f1f",
                  })}
                >
                  <FaIcons.FaBookmark className="icons nav-icons" />
                </NavLink>
              </li>
            </ul>
            <ul>
              <li className="inline-block md:mr-6">
                <NavLink
                  to="/profile"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "#070f1f",
                  })}
                >
                  <FaIcons.FaUserCircle className="icons nav-icons" />
                </NavLink>
              </li>

              <li className="inline-block ml-4 md:mr-4">
                <Link to="">
                  <FaIcons.FaSignOutAlt
                    className="icons nav-icons"
                    onClick={() => logoutUserHandler()}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Topbar };
