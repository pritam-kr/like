import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token,  username]);

  useEffect(() => {
    dispatch(getAllPost())
    dispatch(getAllUserData());
  }, []);

  
  return { setPostData, postData, };
};
