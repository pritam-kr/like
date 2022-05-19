import React from "react";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../Context/ModalContext";
import { userAvatar } from "../../Utils/userAvatar";

const FollowerModal = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const {
    auth: { userInfo, token },
    post,
    user: { users },
  } = state;

  //Current logged user
  const currentUser = state.user.users.find(
    (eachUser) => eachUser.username === userInfo.username
  );

  const { followerModal, setFollowerModal } = useModalContext();

  //Single profile handler
  const singleProfileHandler = (username) => {
    if (username === userInfo.username) {
      navigate("/profile");
    } else {
      navigate(`/profile/${username}`);
    }
  };

  return (
    followerModal && (
      <div className="post-form-modal follower-modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-start w-full ">
        <div className="post-form-wrapper follower-modal-wrapper mx-3 rounded-3xl">
          <div className="p-6 border-b-2 flex justify-between">
            <FaIcons.FaTimes
              className="icons"
              onClick={() => setFollowerModal(false)}
            />
            <p className="font-semibold text-2xl">Followers</p>
          </div>

          <ul className="followers-list px-6 h-80 overflow-y-auto">

          {currentUser?.followers?.length === 0 ? (
              <p className="text-center py-4 text-xl">
                You  Don't have any followers.
              </p>
            ) : (
              currentUser?.followers?.map((eachUser) => (
                <li key={eachUser._id} className="my-2  py-1">
                  <div className="admin-short-info border-b-0 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={userAvatar(eachUser.username, users).avatar}
                        alt={eachUser.username}
                        className="post-avatar mr-3"
                      />

                      <div>
                        <h1
                          className="post-user-name leading-none text-[#292929]"
                          cursor-pointer
                          onClick={() =>
                            singleProfileHandler(eachUser.username)
                          }
                        >
                          {eachUser.firstName} {eachUser.lastName}
                        </h1>
                        <p
                          className="post-user-name leading-none text-[#292929]"
                          cursor-pointer
                          onClick={() =>
                            singleProfileHandler(eachUser.username)
                          }
                        >
                          {eachUser.username}
                        </p>
                      </div>
                    </div>

                     
                  </div>
                </li>
              ))
            )}

           
          </ul>
        </div>
      </div>
    )
  );
};

export { FollowerModal };
