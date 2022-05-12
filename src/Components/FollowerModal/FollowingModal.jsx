import React from "react";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import {useModalContext} from "../../Context/ModalContext"

const FollowingModal = () => {

  const {user : {users}, auth} = useSelector((state) => state)

  // console.log(auth)

  const {followingModal, setFollowingModal} = useModalContext()

  return (
   followingModal &&  <div className="post-form-modal following-modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-start w-full ">
   <div className="post-form-wrapper follower-modal-wrapper mx-3 rounded-3xl">
     <div className="p-6 border-b-2 flex justify-between">
       <FaIcons.FaTimes className="icons" onClick={() => setFollowingModal(false)} />
       <p className="font-semibold text-2xl">Following</p>
     </div>

     <ul className="followers-list px-6 h-80 overflow-y-auto">
       <li className="my-2  py-1">
         <div className="admin-short-info border-b-0 flex justify-between items-center">
           <div className="flex items-center">
             <img
               src="https://avatars.githubusercontent.com/u/84632214?v=4"
               alt="admin"
               className="post-avatar mr-3"
             />
             <h1 className="post-user-name leading-none text-[#292929]">Pritam Kumar</h1>
           </div>

           <div className="ml-2">
             <button className="btn btn-secondary rounded-3xl">Unfollow</button>
           </div>
         </div>
       </li>
       <li className="my-2  py-1">
         <div className="admin-short-info border-b-0 flex justify-between items-center">
           <div className="flex items-center">
             <img
               src="https://avatars.githubusercontent.com/u/84632214?v=4"
               alt="admin"
               className="post-avatar mr-3"
             />
             <h1 className="post-user-name leading-none text-[#292929]">Pritam Kumar</h1>
           </div>

           <div className="ml-2">
             <button className="btn btn-secondary rounded-3xl">Unfollow</button>
           </div>
         </div>
       </li>
       <li className="my-2  py-1">
         <div className="admin-short-info border-b-0 flex justify-between items-center">
           <div className="flex items-center">
             <img
               src="https://avatars.githubusercontent.com/u/84632214?v=4"
               alt="admin"
               className="post-avatar mr-3"
             />
             <h1 className="post-user-name leading-none text-[#292929]">Pritam Kumar</h1>
           </div>

           <div className="ml-2">
             <button className="btn btn-secondary rounded-3xl">Unfollow</button>
           </div>
         </div>
       </li>
     </ul>
   </div>
 </div>
  );
};

export { FollowingModal };
