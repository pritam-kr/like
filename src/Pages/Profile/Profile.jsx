import React, { useState } from "react";
import "./Profile.css";
import {
  Topbar,
  PostCard,
  PostModal,
  FollowerModal,
  FollowingModal,
  Loading,
  EditPostModal,
  ProfileEdit,
} from "../../Components/Index";
import * as FaIcons from "react-icons/fa";
import { useModalContext } from "../../Context/ModalContext";
import { useSelector } from "react-redux";
import { usePost } from "../../Hooks";

const Profile = () => {
  const state = useSelector((state) => state);
  const {
    auth: {
      userInfo: { username, avatar },
      token,
    },
    post,
  } = state;

  //Current logged user
  const currentUser = state.user.users.find(
    (eachUser) => eachUser.username === username
  );

  const { setFollowerModal, setFollowingModal, editPostModal } =
    useModalContext();

  //Post related Data
  const { loading, allPost } = post;

  //CurrentUserPost
  const currentUserPosts = allPost.filter(
    (eachPost) => eachPost.username === username
  );

  // Sort by Latest post by the user
  const postSort = [...allPost]
    .sort((a, b) => b.id - a.id)
    .filter((eachPost) => eachPost.username === username);

  const { deletedPost } = usePost();

  const [editPostData, setPostEditData] = useState({
    content: "",
    caption: "",
  });

  // User profile edit handler

  const [editProfileModal, setEditProfileModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    website: "",
    bio: "",
    avatar: "",
  });

  const userProfileEditHandler = async ({ website, bio }) => {
    setUpdateData({ website: website, bio: bio });
    // console.log(updateData)
    setEditProfileModal(true);
  };

  return (
    <>
      <Topbar />
      <div className="parent-container profile-container ">
        <div className="content-wrapper profile-wrapper w-full max-w-screen-lg mx-auto">
          <div className="user-info-wrapper flex-col flex justify-center  items-center my-1rem">
            <div className="user-avatar-wrapper mb-2">
              <img
                alt="avatar"
                className="w-40 h-40 object-cover rounded-full"
                src={currentUser?.avatar}
              />
            </div>

            <div className="profile-info">
              <div className="text-center">
                <h1 className="user-full-name text-medium-heading font-semibold flex justify-center items-center">
                  {currentUser?.firstName} {currentUser?.lastName}
                  <span className="ml-4 ">
                    <FaIcons.FaEdit
                      className="icons profile-icons"
                      onClick={() =>
                        userProfileEditHandler({
                          website: currentUser.website,
                          bio: currentUser.bio,
                        })
                      }
                    />
                  </span>
                </h1>
                <p className="text-sub-heading user-name">
                  @{currentUser?.username}
                </p>
                <p className="text-sub-heading text-[#f7f7f7]">
                  {currentUser?.bio}
                </p>
                <a
                  href={currentUser?.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sub-heading text-[#f7f7f7] py-3"
                >
                  {" "}
                  {currentUser?.website}
                </a>
              </div>
              <div className="chips-container text-center mt-2 text-sub-heading">
                <button className="btn mx-1 rounded-3xl">
                  Posts{" "}
                  {currentUserPosts?.length < 10
                    ? "0" + currentUserPosts?.length
                    : currentUserPosts?.length}
                </button>
                <button
                  className="btn mx-1 rounded-3xl"
                  onClick={() => setFollowerModal(true)}
                >
                  Followers{" "}
                  {currentUser?.followers?.length < 10
                    ? "0" + currentUser?.followers?.length
                    : currentUser?.followers?.length}
                </button>
                <button
                  className="btn mx-1 rounded-3xl"
                  onClick={() => setFollowingModal(true)}
                >
                  Following{" "}
                  {currentUser?.following?.length < 10
                    ? "0" + currentUser?.following?.length
                    : currentUser?.following?.length}
                </button>
              </div>
            </div>
          </div>

          {/*--Post---Card*/}
          {loading ? (
            <Loading />
          ) : (
            <div className="post-wrapper my-6 p-3 md:flex md:flex-wrap md:justify-start">
              {postSort?.map((eachPost, i) => (
                <PostCard
                  eachPost={eachPost}
                  key={i}
                 
                  setPostEditData={setPostEditData}
                />
              ))}
            </div>
          )}

          {/*post modal start*/}
          <PostModal />
          {editPostModal && (
            <EditPostModal
              editPostData={editPostData}
              setPostEditData={setPostEditData}
            />
          )}
          {/*post modal end*/}

          <FollowerModal />
          <FollowingModal />

          {editProfileModal && (
            <ProfileEdit
              editProfileModal={editProfileModal}
              setEditProfileModal={setEditProfileModal}
              updateData={updateData}
              setUpdateData={setUpdateData}
              currentUser={currentUser}
            />
          )}
        </div>
      </div>
    </>
  );
};

export { Profile };
