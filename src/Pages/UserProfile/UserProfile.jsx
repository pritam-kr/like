import React, {useEffect} from "react";
import { Topbar, PostModal, Loading } from "../../Components/Index";
import * as FaIcons from "react-icons/fa";
import { useModalContext } from "../../Context/ModalContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { likeByUser } from "../../Utils/LikeByUser";

import { dislikePost, likePost } from "../../Store/Slice/PostSlice";
import { userAvatar } from "../../Utils/userAvatar";

const UserProfile = () => {
  const pathname = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const {
    auth: {
      userInfo: { _id },
      token,
    },
    post: { loading, allPost },
    user: { users },
  } = state;

  //Current Profile
  const currentProfile = users.find(
    (eachUser) => eachUser.username === pathname.username
  );

  useEffect(() => {

    document.title =currentProfile.username

  }, [currentProfile.username])

  //Current profile posts
  const currentProfilePosts = allPost.filter(
    (eachPost) => eachPost.username === currentProfile.username
  );

  const { setFollowerModal, setFollowingModal } =
    useModalContext();

  // Dislike Post Handler
  const disLikePostHandler = (_id, token) => {
    dispatch(dislikePost({ postId: _id, token: token }));
  };

  //Post Like Handler
  const likePostHandler = (_id, token) => {
    dispatch(likePost({ postId: _id, token: token }));
  };

  //Single Post and comment handler
  const singlePostHandler = (postId) => {
    if (postId) {
      navigate(`/post/${postId}`);
    }
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
                className="w-40 rounded-full"
                src={currentProfile?.avatar}
              />
            </div>

            <div className="profile-info">
              <div className="text-center">
                <h1 className="user-full-name text-medium-heading font-semibold flex justify-center items-center">
                  {currentProfile?.firstName} {currentProfile?.lastName}
                </h1>
                <p className=" user-name text-xl py-1">
                  @{currentProfile?.username}
                </p>

                <p className="text-sub-heading text-sm py-2 text-[#f7f7f7]">
                  {currentProfile?.bio}
                </p>

                <a
                  href={currentProfile?.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f7f7f7] my-2 text-[14px]"
                >
                  {" "}
                  {currentProfile?.website}
                </a>

                <p className="text-sub-heading text-sm py-2 text-[#f7f7f7]"></p>
              </div>
              <div className="chips-container text-center mt-0 text-sub-heading">
                <button className="btn mx-1 rounded-3xl">
                  Posts
                  {currentProfilePosts?.length < 10
                    ? "0" + currentProfilePosts?.length
                    : currentProfilePosts?.length}
                </button>
                <button
                  className="btn mx-1 rounded-3xl"
                  onClick={() => setFollowerModal(true)}
                >
                  Followers{" "}
                  {currentProfile?.followers?.length < 10
                    ? "0" + currentProfile?.followers?.length
                    : currentProfile?.followers?.length}
                </button>
                <button
                  className="btn mx-1 rounded-3xl"
                  onClick={() => setFollowingModal(true)}
                >
                  Following{" "}
                  {currentProfile?.following?.length < 10
                    ? "0" + currentProfile?.following?.length
                    : currentProfile?.following?.length}
                </button>
              </div>
            </div>
          </div>

          {/*--Post---Card*/}
          {loading ? (
            <Loading />
          ) : (
            <div className="post-wrapper my-6 p-3 md:flex md:flex-wrap md:justify-start">
              {currentProfilePosts?.map((eachPost, ) => (
                <div className="post-card border-1  mt-1 bg-light-bg text-[#f7f7f7] p-4 rounded-3xl  md:w-124" key={eachPost._id}>
                  <div className="flex items-center justify-between p-2 ">
                    <div className="flex items-center">
                      <img
                        src={userAvatar(eachPost.username, users).avatar}
                        alt="admin"
                        className="post-avatar mr-3"
                      />
                      <h1 className="post-user-name">{eachPost.username}</h1>
                    </div>
                  </div>

                  <div className="px-2 py-2">
                    <p
                      className="font-bold text-caption-title mt-2 cursor-pointer"
                      onClick={() => singlePostHandler(eachPost.id)}
                    >
                      {eachPost.caption}
                    </p>
                    <p
                      className="text-caption leading-6 cursor-pointer mt-3"
                      onClick={() => singlePostHandler(eachPost.id)}
                    >
                      {eachPost.content}
                    </p>

                    <ul className="flex justify-start items-center mt-6">
                      <li className="flex justify-start items-center mr-2">
                        {likeByUser(eachPost, state.auth.userInfo) ? (
                          <FaIcons.FaHeart
                            className="icons like-icon liked"
                            onClick={() => disLikePostHandler(_id, token)}
                          />
                        ) : (
                          <FaIcons.FaHeart
                            className="icons like-icon "
                            onClick={() => likePostHandler(eachPost._id, token)}
                          />
                        )}
                        <span className="ml-1 text-lg">
                          {eachPost.likes.likeCount}{" "}
                        </span>
                      </li>
                      <li className="flex justify-start items-center mr-2">
                        <FaIcons.FaComment
                          className="icons share-icon"
                          onClick={() => singlePostHandler(eachPost.id)}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <PostModal />
    </>
  );
};

export { UserProfile };
