import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Topbar, PostModal, Users, LoggedUser } from "../../Components//Index";
import {
  removeFromBookmark,
  addToBookmark,
} from "../../Store/Slice/BookmarkSlice";
import {
  likePost,
  dislikePost,
  postComment,
  commentDelete,
} from "../../Store/Slice/PostSlice";
import { likeByUser } from "../../Utils/LikeByUser";
import * as FaIcons from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { getAllUserData } from "../../Store/Slice/UserSlice";
import { userAvatar } from "../../Utils/userAvatar";

const SinglePost = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const pathname = useParams();

  const navigate = useNavigate();

  //User data to follow
  const {
    auth: { token, userInfo },
    post: { allPost, loading },
    user: { users },
    bookmark: { bookmarks },
  } = state;

  useEffect(() => {
    dispatch(getAllUserData());
  }, []);

  const [currentPost, setCurrentPost] = useState([]);

  const getSinglePost = async (postId) => {
    try {
      const {
        data: { post },
      } = await axios.get(`/api/posts/${postId}`);
      setCurrentPost(post);
    } catch (error) {
      toast.error(error.response.statusText, "Try again later", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    getSinglePost(pathname.postid);
  }, [pathname.postid, pathname]);

  //Find post a single post based on POSTID
  const singlePost = allPost?.find(
    (eachPost) => eachPost.id === pathname.postid
  );

  //Post Like Handler
  const likePostHandler = (_id, token) => {
    dispatch(likePost({ postId: _id, token: token }));
  };

  // Dislike Post Handler
  const disLikePostHandler = (_id, token) => {
    dispatch(dislikePost({ postId: _id, token: token }));
  };

  // filter user suggestions
  const filteredUser = users.filter(
    (eachUser) => eachUser.username !== userInfo.username
  );

  const isFound = bookmarks?.find((eachPost) => eachPost === singlePost._id);

  //Remove from bookmark
  const removeBookmarkHandler = (_id, token) => {
    dispatch(removeFromBookmark({ postId: _id, token: token }));
  };

  //add to bookmark
  const bookmarkHandler = (_id, token) => {
    dispatch(addToBookmark({ postId: _id, token: token }));
  };

  //Post a comment Handler
  const [commentData, setCommentData] = useState({ comment: "" });

  const commentHandler = (_id, token) => {
    if (commentData.comment === "") {
      toast.error("Input field can't be empty.", { position: "top-right" });
    } else {
      toast.success("Posted a comment.", { position: "top-right" });
      dispatch(
        postComment({ postId: _id, token: token, commentData: commentData })
      );
    }
    setCommentData({ comment: "" });
  };

  //Delete a comment handler
  const commentDeleteHandler = ({ postId, commentId, token }) => {
    dispatch(commentDelete({ postId, commentId, token }));
  };

  const singleProfileHandler = (username) => {
    if (username === userInfo.username) {
      navigate("/profile");
    } else {
      navigate(`/profile/${username}`);
    }
  };

  

  return (
    <>
      <Topbar />

      <div className="parent-container feed-container ">
        <div className="feed-wrapper  max-w-screen-lg mx-auto grid gap-2 grid-cols-1 md:grid-cols-feed-col px-2 my-2 ">
          <div className="feed-post p-2">
            <div className=" flex justify-between items-center text-white-color p-2"></div>

            {singlePost === undefined ? (
              "no post "
            ) : (
              <div className="feed-post-card mb-4 pd-0 rounded-3xl p-3 bg-light-bg text-[#fff]">
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center ">
                    <div className="avatar post-avatar mr-2 ">
                      <img
                        src={userAvatar(currentPost?.username, users)?.avatar}
                        alt={currentPost.username}
                        className="post-avatar"
                      />
                    </div>
                    <h1
                      className="post-user-name cursor-pointer"
                      onClick={() =>
                        singleProfileHandler(currentPost?.username)
                      }
                    >
                      {currentPost?.username}
                    </h1>
                  </div>
                </div>

                <div className="px-2 py-2">
                  <div>
                    <p className="font-bold text-caption-title cursor-pointer">
                      {currentPost?.caption}
                    </p>
                    <p className="text-caption leading-6 cursor-pointer">
                      {currentPost?.content}
                    </p>

                    <div className="mt-6 mb-0">
                      <h1 className="text-xl font-semibold">Comments</h1>
                    </div>

                    {/*Commented user*/}
                    <div>
                      {currentPost?.comments?.length === 0 ? (
                        <p className="my-3">Do a comment</p>
                      ) : (
                        currentPost?.comments?.map((eachComment) => {
                          return (
                            <li
                              className="my-2 list-none py-2"
                              key={eachComment._id}
                            >
                              <div className="admin-short-info border-b-0 bg-light-bg">
                                <div className="flex last: items-center">
                                  <img
                                    src={userAvatar(eachComment?.username, users)?.avatar}
                                    alt= {eachComment.username}
                                    className="post-avatar w-9 h-9"
                                  />
                                  <div className="ml-2 w-full">
                                    <p className="post-user-name leading-none flex justify-between items-center text-md">
                                      {eachComment?.firstName} {eachComment?.lastName}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <p className="mt-4 flex justify-between">
                                <span className="font-semibold text-lg">
                                  {eachComment?.comment}
                                </span>
                                <span className="flex items-center">
                                  {new Date(
                                    eachComment.createdAt
                                  ).toDateString()}
                                  <span className="ml-2">
                                    <FaIcons.FaTrashAlt
                                      className="icons text-[14px] "
                                      onClick={() =>
                                        commentDeleteHandler({
                                          postId: currentPost._id,
                                          commentId: eachComment._id,
                                          token: token,
                                        })
                                      }
                                    />
                                  </span>{" "}
                                </span>
                              </p>
                            </li>
                          );
                        })
                      )}
                    </div>
                  </div>

                  {/*Feeds icons section */}
                  <div className="flex justify-between mt-4 mb-4">
                    <ul className="flex justify-start items-center py-2">
                      <li className="flex justify-start items-center mr-2">
                        {likeByUser(singlePost, userInfo) ? (
                          <FaIcons.FaHeart
                            className="icons like-icon liked"
                            onClick={() =>
                              disLikePostHandler(singlePost?._id, token)
                            }
                          />
                        ) : (
                          <FaIcons.FaHeart
                            className="icons like-icon "
                            onClick={() =>
                              likePostHandler(singlePost?._id, token)
                            }
                          />
                        )}
                        <span className="ml-1">
                          {singlePost?.likes?.likeCount}
                        </span>
                      </li>
                    </ul>

                    <ul className="flex">
                      <li className="flex justify-start items-center mr-2">
                        {isFound ? (
                          <FaIcons.FaBookmark
                            className="icons share-icon liked"
                            onClick={() =>
                              removeBookmarkHandler(singlePost?._id, token)
                            }
                          />
                        ) : (
                          <FaIcons.FaBookmark
                            className="icons share-icon "
                            onClick={() =>
                              bookmarkHandler(singlePost?._id, token)
                            }
                          />
                        )}
                      </li>
                    </ul>
                  </div>

                  {/* Comments Element */}

                  <div className="mt-0 flex">
                    <input
                      type="search"
                      value={commentData.comment}
                      className="input rounded-full w-full bg-dark-bg text-xl mr-2"
                      placeholder="Write Something"
                      onChange={(event) =>
                        setCommentData((prev) => ({
                          ...prev,
                          comment: event.target.value,
                        }))
                      }
                    />
                    <button
                      className="text-xl ml-2 btn-follow-unfollow rounded-full pt-2 pb-2 pr-3 pl-3"
                      onClick={() => commentHandler(currentPost._id, token)}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="users-suggestion hidden p-2 h-min md:block">
            <LoggedUser />

            <div className="suggestion-people-wrapper p-4 bg-light-bg  rounded-3xl">
              <h1 className=" font-bold">Suggestions for You</h1>

              <ul className="suggestions-people-list h-96 overflow-y-scroll">
                {filteredUser?.map((each) => (
                  <Users eachUser={each} key={each._id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PostModal />
    </>
  );
};

export { SinglePost };
