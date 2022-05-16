import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getBookmarkService , addToBookmarkService, removeBookmarkService} from "../../Services/index";

const initialState = {
  bookmarks: [],
  loading: false,
  error: "",
};

// Get all Bookmarks post
export const getBookmarkPost = createAsyncThunk(
  "posts/getBookmark",
  async ({ token }, { rejectWithValue }) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await getBookmarkService(token);
      if (status === 200) {
        return bookmarks;
      }
    } catch (error) {
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);

 
//Add to bookmarks
export const addToBookmark = createAsyncThunk(
  "posts/addToBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await addToBookmarkService(postId, token)
      if (status === 200) {
        return bookmarks;
      }
    } catch (error) {
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);


//Remove from bookmark
export const removeFromBookmark = createAsyncThunk(
  "posts/removeFromBookmark",
  async ({ postId, token }, { rejectWithValue }) => {


    try {
      const {
        status,
        data: { bookmarks },
      } = await  removeBookmarkService(postId, token)
      if (status === 200) {
        
        return bookmarks;
      }
    } catch (error) {
       
      return rejectWithValue("Error occured! Try Again Later");
    }
  }
);




const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  extraReducers: {
    //Bookmark Post
    [getBookmarkPost.pending]: (state) => {
      state.loading = true;
    },

    [getBookmarkPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },

    [getBookmarkPost.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    //Bookmark Post
    [addToBookmark.pending]: (state) => {
      state.loading = true;
    },

    [addToBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },

    [addToBookmark.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

    // Remove from bookmark
    [removeFromBookmark.pending]: (state) => {
      state.loading = true;
    },

    [removeFromBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },

    [removeFromBookmark.rejected]: (state) => {
      state.loading = false;
      state.error = "Error occured! Try again later";
    },

  },
});

export default bookMarkSlice.reducer;
