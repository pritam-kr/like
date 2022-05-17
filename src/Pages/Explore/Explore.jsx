import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Topbar, PostModal, Loading } from "../../Components/Index";
import * as FaIcons from "react-icons/fa";
import { dislikePost, likePost } from "../../Store/Slice/PostSlice";
import { likeByUser } from "../../Utils/LikeByUser";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    auth: { userInfo, token },
    post: { allPost, loading },
  } = state;

  

   const navigate = useNavigate()

  //Like Post Handler
  const likePostHandler = (_id, token) => {
    dispatch(likePost({ postId: _id, token: token }));
  };

  // Dislike Post Handler
  const disLikePostHandler = (_id, token) => {
    dispatch(dislikePost({ postId: _id, token: token }));
  };

  //Single Post and comment handler
  const singlePostHandler = (postId) => {
    if (postId) {
      navigate(`/post/${postId}`);
    }
  };

  return (
    <>
      <Topbar />

      <div className="parent-container feed-container ">
        <div className="feed-wrapper max-w-screen-lg mx-auto grid gap-2  px-2 my-2 ">
          <div className="explore-post-container mx-4 md:mx-0 md:flex md:flex-wrap md:justify-center gap-2 py-8">
            {loading ? (
              <Loading />
            ) : (
              <>
                {allPost.map((eachPost) => (
                  <div className="post-card  w-full border-1  mt-1 bg-light-bg text-[#f7f7f7] p-8 rounded-3xl md:w-124">
                    <div className="flex items-center justify-between p-2 ">
                      <div className="flex items-center">
                        <img
                          src={
                            "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                          }
                          alt="admin"
                          className="post-avatar mr-3"
                        />
                        <h1 className="post-user-name"> {eachPost.username}</h1>
                      </div>
                    </div>

                    <div className="px-2 py-2">
                      <p className="font-bold text-caption-title mt-2"> </p>
                      <p className="font-bold text-caption-title mt-2 cursor-pointer"  onClick={() => singlePostHandler(eachPost.id)}>
                        {eachPost.caption}
                      </p>
                      <p className="text-caption leading-6 cursor-pointer"  onClick={() => singlePostHandler(eachPost.id)}>
                        {eachPost.content}
                      </p>

                      <ul className="flex justify-start items-center mt-8">
                        <li className="flex justify-start items-center mr-2">
                          {likeByUser(eachPost, userInfo) ? (
                            <FaIcons.FaHeart
                              className="icons like-icon liked"
                              onClick={() =>
                                disLikePostHandler(eachPost._id, token)
                              }
                            />
                          ) : (
                            <FaIcons.FaHeart
                              className="icons like-icon "
                              onClick={() =>
                                likePostHandler(eachPost._id, token)
                              }
                            />
                          )}
                          <span className="ml-1 text-lg"> {eachPost.likes.likeCount}</span>
                        </li>
                        <li className="flex justify-start items-center mr-2">
                          <FaIcons.FaComment className="icons share-icon" onClick={() => singlePostHandler(eachPost.id)} />
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <PostModal />
    </>
  );
};

export { Explore };

// <div className="post-card border-1  mt-1 bg-light-bg text-[#f7f7f7] p-4 rounded-3xl">
// <div className="flex items-center justify-between p-2 ">
//   <div className="flex items-center">
//     <img
//       src={
//         "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
//       }
//       alt="admin"
//       className="post-avatar mr-3"
//     />
//     <h1 className="post-user-name"> Pritam</h1>
//   </div>
//   <div className="flex justify-center items-center">
//     <span className="mr-2">
//       <FaIcons.FaTrash
//         className="icons profile-icons"
//         // onClick={() => postDeleteHandler(_id, token)}
//       />
//     </span>
//     <span>
//       <FaIcons.FaEdit
//         className="icons profile-icons"
//         // onClick={() =>
//         //   postEditHandler({ caption: caption, content: content })
//         // }
//       />
//     </span>
//   </div>
// </div>

// <div className="px-2 py-2">
//   <p className="font-bold text-caption-title mt-2"> </p>
//   <p className="text-caption leading-6 ">

//   </p>

//   <ul className="flex justify-start items-center mt-2">
//     <li className="flex justify-start items-center mr-2">
//       {/* {likeByUser(eachPost, userInfo) ? (
//         <FaIcons.FaHeart
//           className="icons like-icon liked"
//           onClick={() => disLikePostHandler(_id, token)}
//         />
//       ) : (
//         <FaIcons.FaHeart
//           className="icons like-icon "
//           onClick={() => likePostHandler(_id, token)}
//         />
//       )} */}
//       <span className="ml-1 text-lg">5 </span>
//     </li>
//     <li className="flex justify-start items-center mr-2">
//       <FaIcons.FaComment className="icons share-icon" />
//     </li>
//   </ul>
// </div>
// </div>
