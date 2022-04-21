import React from "react";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";

const FeedPostCard = () => {

  const state = useSelector((state) => state);
  const { auth  } = state;
  const token = auth.token;
 

 

  return (
    <div className="feed-post-card border-2 mb-4 pb-0 ">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <img
            className="post-avatar mr-2"
            src="https://avatars.githubusercontent.com/u/84632214?v=4"
            alt=""
          />
          <h1 className="post-user-name">@pritamkr</h1>
        </div>
      </div>

      <div className="post-thumbnail-wrapper my-2 p-0 h-96">
        <img
          src="https://avatars.githubusercontent.com/u/84632214?v=4"
          alt="user-name"
        />
      </div>

      <div className="px-2 py-2">
        <div>
          <p className="font-bold text-caption-title ">Hello World!</p>
          <p className="text-caption leading-6 ">
            to prevent flex items from wrapping, causing inflexible items to
            overflow the container if necessary:
          </p>
        </div>
        <ul className="flex justify-start items-center py-2">
          <li className="flex justify-start items-center mr-2">
            <FaIcons.FaHeart className="icons like-icon" />
            <span className="ml-1">20</span>
          </li>
          <li className="flex justify-start items-center mr-2">
            <FaIcons.FaComment className="icons share-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { FeedPostCard };
