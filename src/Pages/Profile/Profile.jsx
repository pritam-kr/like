import React, { useEffect } from "react";
import "./Profile.css";
import {
  Topbar,
  PostCard,
  PostModal,
  FollowerModal,
  FollowingModal,
  Loading,
} from "../../Components/Index";
import * as FaIcons from "react-icons/fa";
import { useModalContext } from "../../Context/ModalContext";
import { useSelector } from "react-redux";
import { usePost } from "../../Hooks";
import axios from "axios";

const Profile = () => {
  const state = useSelector((state) => state);

  const { auth, post } = state;
  const token = auth.token;

  const { setFollowerModal, setFollowingModal } = useModalContext();

  //Post related Data
  const { posts, status } = post;
  // Sort by Latest post by the user
  const postSort = [...posts].sort((a, b) => b.id - a.id);

  const { deletedPost, likePost } = usePost();
  //User info
  const userInfo = auth.userInfo;

  
  return (
    <>
      <Topbar />
      <div className="parent-container profile-container ">
        <div className="content-wrapper profile-wrapper w-full max-w-screen-lg mx-auto">
          <div className="user-info-wrapper flex-col flex justify-center  items-center my-1rem">
            <div className="user-avatar-wrapper mb-2">
              <img
                // src="https://avatars.githubusercontent.com/u/84632214?v=4"
                alt="avatar"
                className="w-40 rounded-full"
                src={
                  userInfo?.avatar === ""
                    ? "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg"
                    : userInfo?.avatar
                }
              />
            </div>

            <div className="profile-info">
              <div className="text-center">
                <h1 className="user-full-name text-medium-heading font-semibold flex justify-center items-center">
                  {userInfo.firstName} {userInfo.lastName}
                  <span className="ml-4 ">
                    <FaIcons.FaEdit className="icons profile-icons" />
                  </span>
                </h1>
                <p className="text-sub-heading user-name">
                  @{userInfo.username}
                </p>
                <p className="text-sub-heading text-[#f7f7f7]">
                  I'm front end developer based on Ranchi (Jharkhand).
                </p>
              </div>
              <div className="chips-container text-center mt-2 text-sub-heading">
                <button className="btn mx-1 rounded-3xl">
                  Posts{" "}
                  {posts?.length < 10 ? "0" + posts?.length : posts?.length}
                </button>
                <button
                  className="btn mx-1 rounded-3xl"
                  onClick={() => setFollowerModal(true)}
                >
                  Followers 1k
                </button>
                <button
                  className="btn mx-1 rounded-3xl"
                  onClick={() => setFollowingModal(true)}
                >
                  Following 409
                </button>
              </div>
            </div>
          </div>

          {/*--Post---Card*/}
          {status ? (
            <Loading />
          ) : (
            <div className="post-wrapper my-6 p-3">
              {postSort?.map((eachPost, i) => (
                <PostCard
                  eachPost={eachPost}
                  key={i}
                  deletedPost={deletedPost}
                  likePost={likePost}
                />
              ))}
            </div>
          )}

          {/*post modal start*/}
          <PostModal />
          {/*post modal end*/}

          <FollowerModal />
          <FollowingModal />
        </div>
      </div>
    </>
  );
};

export { Profile };
