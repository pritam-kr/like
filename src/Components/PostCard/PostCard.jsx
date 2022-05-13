import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { useModalContext } from "../../Context/ModalContext";
import { usePost } from "../../Hooks";
 
import { contentShort } from "../../Utils/Index";

const PostCard = ({ eachPost, deletedPost, likePost, setPostEditData }) => {
  const {
    username,
    caption,
    content,
    likes,
    _id,
    avatar,
    createdAt,
    updatedAt,
  } = eachPost || {};
  const likeCount = likes.likeCount;

  const { postModal, setPostModal, setEditPostModal } = useModalContext();



  const state = useSelector((state) => state);
  const {
    auth: { userInfo },
  } = state;

  // Delete Post handler
  const postDeleteHandler = (_id) => {
    deletedPost(_id);
  };

  //Like/Dislike Handler
  const likeDislikeHandler = (_id) => {
    likePost(_id);
  };

  //Post Edit Handler

  const postEditHandler = ({ caption, content }) => {
  setEditPostModal(true)
  setPostEditData({content: content, caption: caption, id: _id })

  };

  return (
    <div className="post-card border-1  mt-1 bg-light-bg text-[#f7f7f7] p-4 rounded-3xl">
      <div className="flex items-center justify-between p-2 ">
        <div className="flex items-center">
          <img
            className="post-avatar mr-2"
            src={userInfo.avatar}
            alt="user profile avatar"
          />
          <h1 className="post-user-name">@{username}</h1>
        </div>
        <div className="flex justify-center items-center">
          <span className="mr-2">
            <FaIcons.FaTrash
              className="icons profile-icons"
              onClick={() => postDeleteHandler(_id)}
            />
          </span>
          <span>
            <FaIcons.FaEdit
              className="icons profile-icons"
              onClick={() =>
                postEditHandler({ caption: caption, content: content })
              }
            />
          </span>
        </div>
      </div>

      <div className="px-2 py-2">
        <p className="font-bold text-caption-title mt-2">{caption}</p>
        <p className="text-caption leading-6 ">{contentShort(content)}</p>

        <ul className="flex justify-start items-center mt-2">
          <li className="flex justify-start items-center mr-2">
            <FaIcons.FaHeart
              className="icons like-icon"
              onClick={() => likeDislikeHandler(_id)}
            />
            <span className="ml-1 text-lg">{likeCount}</span>
          </li>
          <li className="flex justify-start items-center mr-2">
            <FaIcons.FaComment className="icons share-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { PostCard };
