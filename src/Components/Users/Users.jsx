import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser, unFollowUser } from "../../Store/Slice/UserSlice";
import "./Users.css";

const Users = ({ eachUser }) => {
  const navigate = useNavigate()
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
    dispatch(unFollowUser({ unFollowUserId: userId, token: token }));
  };

  const currentUser = users?.find(
    (each) => each.username === userInfo.username
  );

  //Single profile handler
  const singleProfileHandler = (username) => {
    if (username === userInfo.username) {
      navigate("/profile");
    } else {
      navigate(`/profile/${username}`);
    }
  };

  return (
    <li className="my-2  py-2 "  >
      <div className="admin-short-info border-b-0 bg-light-bg">
        <div className="flex items-center">
          <img
            src={eachUser?.avatar}
            alt="users-avatar"
            className="post-avatar"
          />
          <div className="ml-2 w-full">
            <div className="post-user-name leading-none flex justify-between items-center text-[#f7f7f7]">
              <p className="cursor-pointer" onClick={() => singleProfileHandler(eachUser.username)}>
                {eachUser?.firstName} {eachUser?.lastName}
              </p>
              {currentUser?.following?.find(
                (each) => each._id === eachUser._id
              ) ? (
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
            </div>
            <p onClick={() => singleProfileHandler(eachUser.username)} className="text-[#909090] mt-[-6px] cursor-pointer">{eachUser?.username}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export { Users };

