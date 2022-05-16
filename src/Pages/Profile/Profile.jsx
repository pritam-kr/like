import React, {  useState } from "react";
import "./Profile.css";
import {
  Topbar,
  PostCard,
  PostModal,
  FollowerModal,
  FollowingModal,
  Loading,EditPostModal
} from "../../Components/Index";
import * as FaIcons from "react-icons/fa";
import { useModalContext } from "../../Context/ModalContext";
import { useSelector } from "react-redux";
import { usePost } from "../../Hooks";
import {likePost} from "../../Store/Slice/PostSlice"
 
 

const Profile = () => {
  const state = useSelector((state) => state);
  const { auth:  {userInfo : {username , avatar, firstName, lastName, _id}, token }, post } = state
  
   console.log(state)

  const { setFollowerModal, setFollowingModal, editPostModal, } = useModalContext();
 
  //Post related Data
  const { posts, loading, allPost } = post;

  // console.log(allPost)
  // Sort by Latest post by the user
  const postSort = [...allPost].sort((a, b) => b.id - a.id).filter((eachPost) => eachPost.username === username);
  const { deletedPost, } = usePost();

  const [editPostData, setPostEditData] =  useState({ content: "", caption: "" })
 

  return (
    <>
      <Topbar />
      <div className="parent-container profile-container ">
        <div className="content-wrapper profile-wrapper w-full max-w-screen-lg mx-auto">
          <div className="user-info-wrapper flex-col flex justify-center  items-center my-1rem">
            <div className="user-avatar-wrapper mb-2">
              <img
                alt="avatar"
                className="w-40 rounded-full"
                src={ avatar || "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg"}
              />
            </div>

            <div className="profile-info">
              <div className="text-center">
                <h1 className="user-full-name text-medium-heading font-semibold flex justify-center items-center">
                  { firstName} { lastName}
                  <span className="ml-4 ">
                    <FaIcons.FaEdit className="icons profile-icons" />
                  </span>
                </h1>
                <p className="text-sub-heading user-name">
                  @{ username}
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
          {loading ? (
            <Loading />
          ) : (
            <div className="post-wrapper my-6 p-3">
              {postSort?.map((eachPost, i) => (
                <PostCard
                  eachPost={eachPost}
                  key={i}
                  deletedPost={deletedPost}
                  setPostEditData= {setPostEditData} 
                />
              ))}
            </div>
          )}

          {/*post modal start*/}
          <PostModal />
          {editPostModal && <EditPostModal editPostData={editPostData} setPostEditData={setPostEditData}  />}
          {/*post modal end*/}

          <FollowerModal />
          <FollowingModal />
        </div>
      </div>
    </>
  );
};

export { Profile };
