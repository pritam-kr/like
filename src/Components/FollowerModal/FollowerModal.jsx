import React from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../Context/ModalContext";
import { unFollowUser } from "../../Store/Slice/UserSlice";

const FollowerModal = () => {
  const state = useSelector((state) => state);
 const navigate =  useNavigate()
  const {
    auth: {
      userInfo ,
      token,
    },
    post,
  } = state;
  
  //Current logged user
  const currentUser = state.user.users.find(
    (eachUser) => eachUser.username ===  userInfo.username
  );


  const { followerModal, setFollowerModal } = useModalContext();


   //Single profile handler
   const singleProfileHandler = (username) => {
    if(username === userInfo.username){
       navigate('/profile')
    }else{
      navigate(`/profile/${username}`)
    }

  }

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
            {currentUser.followers.map((eachUser) => (
              <li className="my-2  py-1" key={eachUser._id}>
                <div className="admin-short-info border-b-0 flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                      alt="admin"
                      className="post-avatar mr-3"
                    />
                    <h1 className="post-user-name leading-none cursor-pointer text-[#292929]" onClick={() => singleProfileHandler(eachUser.username)}>
                      {eachUser.username}
                    </h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export { FollowerModal };
