import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDeletePost,
  fetchPostData,
  getNewPost,
  getLikePost,
  getDislikePost,
  getAllPost,
} from "../Store/Slice/PostSlice";
import { getAllUserData} from "../Store/Slice/UserSlice";
 

export const usePost = () => {
  const state = useSelector((state) => state);

  const { auth } = state;
  const token = auth.token;
  const { userInfo } = auth;

  const dispatch = useDispatch();

  //Fetching post Data for a specific user from database
  useEffect(() => {
    dispatch(fetchPostData(userInfo.username));
  }, [token, dispatch, userInfo.username]);

  useEffect(() => {
    dispatch(getAllPost())
    dispatch(getAllUserData());
  }, []);

  //Add new post to database
  const addNewPost = async (post) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/posts`,
        { postData: post },
        { headers: { authorization: token } }
      );

      if (status === 201) {
        // Doing filter data on the basis of user
        const filteredData = posts.filter(
          (eachPost) => eachPost.username === `${userInfo.username}`
        );

        dispatch(getNewPost(filteredData));
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          (eachPost) => eachPost.username === `${userInfo.username}`
        );
        dispatch(getDeletePost(deletedPostForThisUser));
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Like Post
  const likePost = async (postId) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 201) {
        // Doing filter data on the basis of user
        const filteredData = posts.filter(
          (eachPost) => eachPost.username === `${userInfo.username}`
        );
        dispatch(getLikePost(filteredData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Edit Post
  const editPost = async (postId) => {};

  return { addNewPost, deletedPost, likePost, editPost };
};
