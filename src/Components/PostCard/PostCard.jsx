import React from "react";

import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { usePost} from "../../Hooks/index";
import { contentShort } from "../../Utils/Index";

const PostCard = ({ eachPost, deletedPost }) => {
  const { username, caption, content, likes, _id, avatar } = eachPost || {};
  const likeCount = likes.likeCount;
 
  const state = useSelector((state) => state);
  const { auth: {userInfo} } = state;

  // Delete Post handler
  const postDeleteHandler = (_id) => {
    deletedPost(_id);
  };

  return (
    <div className="post-card border-2  mt-1 bg-[#fff]">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <img
            className="post-avatar mr-2"
            src={userInfo.avatar}
            alt="user profile avatar"
          />
          <h1 className="post-user-name">@{username}</h1>
        </div>
        <span>
          <FaIcons.FaTrash
            className="icons profile-icons"
            onClick={() => postDeleteHandler(_id)}
          />
        </span>
      </div>

      <div className="post-thumbnail-wrapper my-2 p-0 ">
        <img
          src="https://avatars.githubusercontent.com/u/84632214?v=4"
          className=""
          alt="user-name"
        />
      </div>

      <div className="px-2 py-2">
        <ul className="flex justify-start items-center">
          <li className="flex justify-start items-center mr-2">
            <FaIcons.FaHeart className="icons like-icon" />
            <span className="ml-1">{likeCount}</span>
          </li>
          <li className="flex justify-start items-center mr-2">
            <FaIcons.FaComment className="icons share-icon" />
          </li>
        </ul>
        <p className="font-bold text-caption-title mt-2">
          {caption && "No Caption"}
        </p>
        <p className="text-caption leading-6 ">{contentShort(content)}</p>
      </div>
    </div>
  );
};

export { PostCard };
