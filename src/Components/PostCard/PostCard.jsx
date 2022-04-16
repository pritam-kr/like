import React from 'react'
import * as FaIcons from "react-icons/fa";

 const PostCard = () => {
  return (
    <div className="post-card border-2  mt-1">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center">
                  <img
                    className="post-avatar mr-2"
                    src="https://avatars.githubusercontent.com/u/84632214?v=4"
                    alt=""
                  /> 
                  <h1 className="post-user-name">@pritamkr</h1>
                </div> 
                <span>
                  <FaIcons.FaTrash className="icons profile-icons" />
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
                    <span className="ml-1">20</span>
                  </li>
                  <li className="flex justify-start items-center mr-2">
                    <FaIcons.FaComment className="icons share-icon" />
                  </li>
                </ul>
                <p className="font-bold text-caption-title mt-2">
                  Hello World! 
                </p>
                <p className="text-caption leading-6 ">
                  to prevent flex items from wrapping, causing inflexible items
                  to overflow the container if necessary:
                </p>
              </div>
            </div>
  )
}

export {PostCard}