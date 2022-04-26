import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  DEFAULT: false,
  LOADING: true,
  ERROR: "",
});

const initialState = {
  posts: [],
  status: STATUS.LOADING,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPost: (state, action) => {
      state.posts = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    getNewPost: (state, action) => {
      state.posts = action.payload;
    },

    getDeletePost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getNewPost, getDeletePost, getAllPost, setStatus } =
  postSlice.actions;
export default postSlice.reducer;

// Redux Toolkit Thunk
export const fetchPostData = (username) => {
  return async function fetchPostThunk(dispatch, state) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const { data, status } = await axios.get(`/api/posts/user/${username}`);

      const posts = data.posts;

      if (status === 200) {
        dispatch(setStatus(STATUS.DEFAULT));
        dispatch(getAllPost(posts));
      }
    } catch (error) {}
  };
};
