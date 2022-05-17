import React from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../Context/ModalContext";
import { followUser, unFollowUser } from "../../Store/Slice/UserSlice";

const FollowingModal = () => {
  const state = useSelector((state) => state);
  const {
    auth: {
      userInfo: { username },
      token,
    },
    post,
  } = state;
  const dispatch = useDispatch();
const navigate =   useNavigate()
  //Current logged user
  const currentUser = state.user.users.find(
    (eachUser) => eachUser.username === username
  );

  const followHandler = (userId) => {
    dispatch(followUser({ followUserId: userId, token: token }));
  };

  const unfollowHandler = (userId) => {
    dispatch(unFollowUser({ unFollowUserId: userId, token: token }));
  };

  const { followingModal, setFollowingModal } = useModalContext();

  //Single profile handler
  const singleProfileHandler = (username) => {
    if(username === state.auth.userInfo.username){
       navigate('/profile')
    }else{
      navigate(`/profile/${username}`)
    }

  }

  return (
    followingModal && (
      <div className="post-form-modal following-modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-start w-full ">
        <div className="post-form-wrapper follower-modal-wrapper mx-3 rounded-3xl">
          <div className="p-6 border-b-2 flex justify-between">
            <FaIcons.FaTimes
              className="icons"
              onClick={() => setFollowingModal(false)}
            />
            <p className="font-semibold text-2xl">Following</p>
          </div>

          <ul className="followers-list px-6 h-80 overflow-y-auto">
            {currentUser?.following?.length === 0 ? (
              <p className="text-center py-4 text-xl">
                You are not following to anyone
              </p>
            ) : (
              currentUser?.following?.map((eachUser) => (
                <li key={eachUser._id} className="my-2  py-1">
                  <div className="admin-short-info border-b-0 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                        alt="admin"
                        className="post-avatar mr-3"
                      />
                      <h1 className="post-user-name leading-none text-[#292929]" cursor-pointer onClick={() =>  singleProfileHandler(eachUser.username)}>
                        {eachUser.username} 
                      </h1>
                    </div>

                    <div className="ml-2">
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

export { FollowingModal };
