import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import {
  getPosts,
  createPostService,
  getUserPostService,
  editPostService,
  likePostService,
  dislikePostService,
  deletePostService,
} from "../../Services/index";

export const getAllPost = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue }) => {
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
      return rejectWithValue("Try again later");
    }
  }
);

// Get post of a specific user
export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async ({ username }, { rejectWithValue }) => {
    try {
      const {
        data: { posts },
        status,
      } = await getUserPostService(username);
      if (status === 200) {
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Error occured, Try Again Later.");
    }
  }
);
//Create A new post
export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const {
        data: { posts },
        status,
      } = await createPostService(postData, token);

      if (status === 201) {
        toast.success("Created a new post", {
          position: "top-right",
          duration: 2000,
          style: {
            fontSize: "12px",
            borderRadius: "10rem",
          },
        });
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Try Again Later");
    }
  }
);

//Edit a post
export const editPost = createAsyncThunk(
  "posts/editPost",
  async (
    { editPostData: { caption, content, id }, token },
    { rejectWithValue }
  ) => {
    const post = { caption: caption, content: content };

    try {
      const {
        data: { posts },
        status,
      } = await editPostService(id, post, token);

      if (status === 201) {
        toast.success("Post Updated.", {
          position: "top-right",
          duration: 2000,
          style: {
            fontSize: "12px",
            borderRadius: "10rem",
          },
        });
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Try again later");
    }
  }
);

//Like a post of user
export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const {
        data: { posts },
        status,
      } = await likePostService(postId, token);
      if (status === 201) {
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);

//Dislike a post of user
export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const {
        data: { posts },
        status,
      } = await dislikePostService(postId, token);
      if (status === 201) {
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);

//Delete a post of user
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const {
        data: { posts },
        status,
      } = await deletePostService(postId, token);

      if (status === 201) {
        toast.success("Post Deleted.", {
          position: "top-right",
          duration: 2000,
          style: {
            fontSize: "12px",
            borderRadius: "10rem",
          },
        });
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);

//Trending post
export const getFilteredPost = createAsyncThunk(
  "posts/trendingPost",
  async ({ trendingPost }) => {
    const data = await trendingPost;
    return data;
  }
);

//Post a comment
export const postComment = createAsyncThunk(
  "posts/postComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        {
          headers: { authorization: token },
        }
      );

      if (status === 201) {
        toast.success("Posted a comment.", {
          position: "top-right",
          duration: 2000,
          style: {
            fontSize: "12px",
            borderRadius: "10rem",
          },
        });
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);

//Delete a comment from a post
export const commentDelete = createAsyncThunk(
  "posts/deleteComment,",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        {
          headers: { authorization: token },
        }
      );

      if (status === 201) {
        toast.success("Comment deleted.", {
          position: "top-right",
          duration: 2000,
          style: {
            fontSize: "12px",
            borderRadius: "10rem",
          },
        });
        return posts;
      }
    } catch (error) {
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);

const initialState = {
  allPost: [],
  posts: [],
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: {
    //Getting post of a specific user
    [getUserPosts.pending]: (state) => {
      state.loading = true;
    },

    [getUserPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },

    [getUserPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Error occured! Try again Later";
    },

    //Getting all user's posts data
    [getAllPost.pending]: (state) => {
      state.loading = true;
    },

    [getAllPost.fulfilled]: (state, action) => {
      const { posts } = action.payload;
      state.loading = false;
      state.allPost = posts;
    },

    [getAllPost.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    //Creating new post
    [createNewPost.pending]: (state) => {
      state.loading = true;
    },

    [createNewPost.fulfilled]: (state, action) => {
      state.loading = false;

      state.allPost = action.payload;
    },

    [createNewPost.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    //Edit post
    [editPost.pending]: (state) => {
      state.loading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },
    [editPost.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    //Like Post
    [likePost.pending]: (state) => {
      state.loading = false;
    },

    [likePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },

    [likePost.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    //Dislike Post
    [dislikePost.pending]: (state) => {
      state.loading = true;
    },

    [dislikePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },

    [dislikePost.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    //Delete Post
    [deletePost.pending]: (state) => {
      state.loading = true;
    },

    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },

    [deletePost.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    //Filtered Post
    [getFilteredPost.fulfilled]: (state, action) => {
      state.allPost = action.payload;
    },

    //Comment Post

    [postComment.pending]: (state) => {
      state.loading = true;
    },

    [postComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },

    [postComment.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    [commentDelete.loading]: (state) => {
      state.loading = true;
    },

    [commentDelete.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },

    [commentDelete.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },
  },
});

export const { getNewPost, getDeletePost, userPosts, getDislikePost } =
  postSlice.actions;

export default postSlice.reducer;
