import React from "react";
import "./Profile.css";
import { Topbar,PostCard } from "../../Components/Index";
import * as FaIcons from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <div className="parent-container profile-container ">
        <Topbar />
        <div className="content-wrapper profile-wrapper w-full max-w-screen-lg mx-auto">
          <div className="user-info-wrapper flex-col flex justify-center  items-center my-1rem">
            <div className="user-avatar-wrapper mb-2">
              <img
                src="https://avatars.githubusercontent.com/u/84632214?v=4"
                alt="avatar"
                className="w-40 rounded-full"
              />
            </div>
            <div className="profile-info">
              <div className="text-center">
                <h1 className="user-full-name text-medium-heading font-semibold flex justify-center items-center">
                  Pritam Kumar{" "}
                  <span className="ml-4 ">
                    {" "}
                    <FaIcons.FaEdit className="icons profile-icons" />{" "}
                  </span>
                </h1>
                <p className="text-sub-heading user-name">@pritamkr</p>
                <p className="text-sub-heading">
                  I'm front end developer based on Ranchi (Jharkhand).
                </p>
              </div>
              <div className="chips-container text-center mt-2 text-sub-heading">
                <button className="btn mx-1">Posts 05 </button>{" "}
                <button className="btn mx-1">Followers 1k</button>
                <button className="btn mx-1">Following 409</button>
              </div>
            </div>
          </div>

          {/*--Post---*/}
          <div className="post-wrapper my-6 p-3">
            <PostCard /> 
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </>
  );
};

export { Profile };
