 
import React from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../Store/Slice/UserSlice";
import "./Users.css";

const Users = ({ eachUser }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    auth: { token, userInfo },
    user: { users },
  } = state;

  const followHandler = (userId) => {
    dispatch(followUser({ followUserId: userId, token: token }));
  };

  const unfollowHandler = (userId) => {
    dispatch(unFollowUser({ unFollowUserId: userId, token: token }))
  };

   const currentUser = users?.find((each) => each.username === userInfo.username)
    

  return (
    <li className="my-2  py-2 " key={eachUser?._id}>
      <div className="admin-short-info border-b-0 bg-light-bg">
        <div className="flex items-center">
          <img
            src={eachUser?.avatar}
            alt="users-avatar"
            className="post-avatar"
          />
          <div className="ml-2 w-full">
            <h1 className="post-user-name leading-none flex justify-between items-center ">
              <p className="cursor-pointer">
                {eachUser?.firstName} {eachUser?.lastName}
              </p> 
              {currentUser?.following?.find((each) => each._id === eachUser._id) ? (
                <button
                  className="text-sm mr-2 btn-follow-unfollow rounded-full pt-2 pb-2 pr-3 pl-3"
                  onClick={() => unfollowHandler(eachUser?._id)}
                >
                   
                  Following
                </button>
              ) : (
                <button
                  className="text-sm mr-2 btn-follow-unfollow rounded-full pt-2 pb-2 pr-3 pl-3"
                  onClick={() => followHandler(eachUser?._id)}
                >
                   
                  Follow
                </button>
              )}
            </h1>
            <p className="text-[#909090] mt-[-6px]">{eachUser?.username}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export { Users };

// <button className="text-sm mr-2 btn-follow-unfollow rounded-full pt-2 pb-2 pr-3 pl-3"> UnFollow</button>
