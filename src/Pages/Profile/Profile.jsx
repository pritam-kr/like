import React from "react";
import "./Profile.css";
import { Topbar,PostCard } from "../../Components/Index";
import * as FaIcons from "react-icons/fa";

const Profile = () => {



  return (
    <>
    <Topbar />
      <div className="parent-container profile-container ">
        
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

          {/*--Post---Card*/}
          <div className="post-wrapper my-6 p-3">
            <PostCard /> 
            <PostCard />
            <PostCard />
          </div>

          
             {/* <div className="post-form-modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-start w-full ">
              <div className="post-form-wrapper mx-3">
                <p className="p-6 border-b-2"><FaIcons.FaTimes className="icons"/></p>
                <form className="post-form p-2">
                      <input className="input mt-2" type="text" placeholder="Write Caption"  />
                      <textarea className="input mt-2" type="text" placeholder="What's Happening..."></textarea>

                      <div className="flex gap-2 mt-2 mb-2">
                        <input type="file" className="input file-upload w-3/4 cursor-pointer"/> <button className="btn w-3/4 text-caption">Post</button>
                      </div>

                </form>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export { Profile };
