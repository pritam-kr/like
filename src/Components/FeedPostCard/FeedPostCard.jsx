import axios from "axios";
import React from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToBookmark,
  removeFromBookmark,
} from "../../Store/Slice/BookmarkSlice";
import { likePost, dislikePost } from "../../Store/Slice/PostSlice";
import { likeByUser } from "../../Utils/LikeByUser";
import "./FeedStyle.css";

const FeedPostCard = ({ eachPost }) => {
  const state = useSelector((state) => state);
  const {
    auth: { token, userInfo },
    user: { users },
    post: { allPost },
    bookmark: { bookmarks },
  } = state;
  const dispatch = useDispatch();

  const {
    id,
    _id,
    username,
    content,
    caption,
    avatar,
    likes: { likeCount },
  } = eachPost || {};
  const navigate = useNavigate();
 
  //Post Like Handler
  const likePostHandler = (_id, token) => {
    dispatch(likePost({ postId: _id, token: token }));
  };

  // Dislike Post Handler
  const disLikePostHandler = (_id, token) => {
    dispatch(dislikePost({ postId: _id, token: token }));
  };

  //add to bookmark
  const bookmarkHandler = (_id, token) => {
    dispatch(addToBookmark({ postId: _id, token: token }));
  };

  const isFound = bookmarks?.find((eachPost) => eachPost === _id);

  //Remove from bookmark
  const removeBookmarkHandler = (_id, token) => {
    dispatch(removeFromBookmark({ postId: _id, token: token }));
  };

  

  //Single Post and comment handler
  const singlePostHandler = (postId) => {
    if (postId) {
      navigate(`/post/${postId}`);
    }
  };

  //Single profile handler
  const singleProfileHandler = (username) => {
    if(username === userInfo.username){
       navigate('/profile')
    }else{
      navigate(`/profile/${username}`)
    }

  }

  return (
    <div className="feed-post-card mb-4 pd-0 rounded-3xl p-3 bg-light-bg text-[#fff]">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center ">
          <img
            src={
              "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
            }
            alt={username}
            className="post-avatar mr-3"
          />
          <h1 className="post-user-name cursor-pointer" onClick={() => singleProfileHandler(username)}>{username}</h1>
        </div>
      </div>

      <div className="px-2 py-2">
        <div>
          <p
            className="font-bold text-caption-title cursor-pointer"
            onClick={() => singlePostHandler(id)}
          >
            {caption}
          </p>
          <p
            className="text-caption leading-6 cursor-pointer"
            onClick={() => singlePostHandler(id)}
          >
            {content}
          </p>
        </div>

        {/*Feeds icons section */}
        <div className="flex justify-between mt-4">
          <ul className="flex justify-start items-center py-2">
            <li className="flex justify-start items-center mr-2">
              {likeByUser(eachPost, userInfo) ? (
                <FaIcons.FaHeart
                  className="icons like-icon liked"
                  onClick={() => disLikePostHandler(_id, token)}
                />
              ) : (
                <FaIcons.FaHeart
                  className="icons like-icon "
                  onClick={() => likePostHandler(_id, token)}
                />
              )}
              <span className="ml-1">{likeCount}</span>
            </li>
            <li className="flex justify-start items-center mr-2">
              <FaIcons.FaComment
                className="icons comment-icon "
                onClick={() => singlePostHandler(id)}
              />
            </li>
           
          </ul>

          <ul className="flex">
            <li className="flex justify-start items-center mr-2">
              {isFound ? (
                <FaIcons.FaBookmark
                  className="icons share-icon liked"
                  onClick={() => removeBookmarkHandler(_id, token)}
                />
              ) : (
                <FaIcons.FaBookmark
                  className="icons share-icon "
                  onClick={() => bookmarkHandler(_id, token)}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { FeedPostCard };
