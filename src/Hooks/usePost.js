import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDeletePost,
  getLikePost,
  getAllPost,
  getUserPosts,
} from "../Store/Slice/PostSlice";
import { getAllUserData} from "../Store/Slice/UserSlice";
 

export const usePost = () => {

  const [postData, setPostData] = useState({ content: "", caption: "" });
 

  const state = useSelector((state) => state);
  const { auth: {token, userInfo: {username}} } = state;
  const dispatch = useDispatch();


  //Fetching post Data for a specific user from database
  useEffect(() => {
    dispatch(getUserPosts({username: username })) 

  }, [token,  username]);

  useEffect(() => {
    dispatch(getAllPost())
    dispatch(getAllUserData());
  }, []);

  
  //Delete post from database
  const deletedPost = async (postId) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });

      if (status === 201) {
        const deletedPostForThisUser = posts.filter(
          (eachPost) => eachPost.username === `${username}`
        );
        dispatch(getDeletePost(deletedPostForThisUser));
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Like Post
  // const likePost = async (postId) => {
  //   try {
  //     const {
  //       data: { posts },
  //       status,
  //     } = await axios.post(
  //       `/api/posts/like/${postId}`,
  //       {},
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );
  //     if (status === 201) {
  //       // Doing filter data on the basis of user
  //       const filteredData = posts.filter(
  //         (eachPost) => eachPost.username === `${username}`
  //       );
  //       dispatch(getLikePost(filteredData));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

 

  return { deletedPost,  setPostData, postData, };
};
