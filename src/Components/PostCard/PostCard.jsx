import React from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useModalContext } from "../../Context/ModalContext";
import { likePost, dislikePost, deletePost } from "../../Store/Slice/PostSlice";
import { contentShort } from "../../Utils/Index";
import { likeByUser } from "../../Utils/Index";
import { Avatar } from "../Index";

const PostCard = ({ eachPost, setPostEditData }) => {
  //Like Post Handler
  const likePostHandler = (_id, token) => {
    dispatch(likePost({ postId: _id, token: token }));
  };

  // Dislike Post Handler
  const disLikePostHandler = (_id, token) => {
    dispatch(dislikePost({ postId: _id, token: token }));
  };

  const dispatch = useDispatch();
  const {
    username,
    caption,
    content,
    likes: { likeCount },
    _id,
    avatar,
    createdAt,
    updatedAt,
  } = eachPost || {};
  const { setEditPostModal } = useModalContext();

  const state = useSelector((state) => state);
  const {
    auth: { userInfo, token },
  } = state;

  // Delete Post handler
  const postDeleteHandler = (_id, token) => {
    dispatch(deletePost({ postId: _id, token: token }));
  };

  //Post Edit Handler
  const postEditHandler = ({ caption, content }) => {
    setEditPostModal(true);
    setPostEditData({ content: content, caption: caption, id: _id });
  };

  return (
    <div className="post-card border-1  mt-1 bg-light-bg text-[#f7f7f7] p-4 rounded-3xl">
      <div className="flex items-center justify-between p-2 ">
        <div className="flex items-center">
          <img
            src={
              "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
            }
            alt="admin"
            className="post-avatar mr-3"
          />
          <h1 className="post-user-name">{username}</h1>
        </div>
        <div className="flex justify-center items-center">
          <span className="mr-2">
            <FaIcons.FaTrash
              className="icons profile-icons"
              onClick={() => postDeleteHandler(_id, token)}
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
            <span className="ml-1 text-lg">{likeCount} </span>
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
