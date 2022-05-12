import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {getPosts} from "../../Services/index"

const STATUS = Object.freeze({
  DEFAULT: false,
  LOADING: true,
  ERROR: "",
});

export const getAllPost = createAsyncThunk("posts/getPosts", async (_, { rejectWithValue }) => {
  try {
    const {
      data: { posts },
      status,
    } = await getPosts();

    if (status === 200) {
      return { posts: posts };
    }
  } catch (error) {
    console.log(error);
    return rejectWithValue("Try again later")
  }
});

const initialState = {
  allPost: [],
  posts: [],
  loading: false,
  error: "",
  status: STATUS.LOADING,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    userPosts: (state, action) => {
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

    getLikePost: (state, action) => {
      console.log(action.payload);
    },
    getDislikePost: (state, action) => {},
  },

  extraReducers: {

    [getAllPost.pending] : (state) => {
      state.loading = true

    }, 
    [getAllPost.fulfilled] : (state, action) => {
      const {posts} = action.payload
      state.loading = false
      state.allPost = posts
    }, 

    [getAllPost.rejected] : (state) => {
      state.loading = false
      state.error = "Error occured! Try again later"
    } 

  },
});

export const {
  getNewPost,
  getDeletePost,
  userPosts,
  setStatus,
  getDislikePost,
  getLikePost,
} = postSlice.actions;

export default postSlice.reducer;

// Redux Toolkit Thunk
//Getting all post of a particular user
export const fetchPostData = (username) => {
  return async function fetchPostThunk(dispatch, state) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const { data, status } = await axios.get(`/api/posts/user/${username}`);
      const posts = data.posts;

      if (status === 200) {
        dispatch(setStatus(STATUS.DEFAULT));
        dispatch(userPosts(posts));
      }
    } catch (error) {}
  };
};
