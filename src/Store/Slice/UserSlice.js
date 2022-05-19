import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

import { followUserService, unFollowUserService } from "../../Services/";

export const getAllUserData = createAsyncThunk(
  "user/getUsers",
  async (_, ThunkApi) => {
    try {
      const {
        data: { users },
        status,
      } = await axios.get("/api/users");

      if (status === 200) {
        return users;
      }
    } catch (error) {
      return ThunkApi.rejectWithValue("Try again later");
    }
  }
);

export const followUser = createAsyncThunk(
  "user/getFollow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const {
        data: { followUser, user },
        status,
      } = await followUserService(followUserId, token);

      if (status === 200) {
        toast.success("User followed", {
          position: "top-right",
          duration: 2000,
          style: {
            fontSize: "12px",
            borderRadius: "10rem",
          }})
        return { followUser: followUser, user: user };
      }
    } catch (error) {
      return rejectWithValue("Try again later");
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "user/getUnFollow",
  async ({ unFollowUserId, token }, { rejectWithValue }) => {
    try {
      const {
        data: { user, followUser },
        status,
      } = await unFollowUserService(unFollowUserId, token);

      if (status === 200) {
        toast.success("User Unfollowed", {
          position: "top-right",
          duration: 2000,
          style: {
            fontSize: "12px",
            borderRadius: "10rem",
          }})
        return { followUser: followUser, user: user };
      }
    } catch (error) {
      return rejectWithValue("Try again later");
    }
  }
);

// If I follow someone, data will update in follower [] of user which is I followed
const updatingFollowedUser = (users, followedUser) => {
  const isUser = users.find((user) => user._id === followedUser._id);

  if (isUser) {
    users = [...users].map((user) =>
      user._id === isUser._id ? followedUser : user
    );
  }

  return users;
};

// If I follow someone, data will update in following[] for me
const updatingFollowingUser = (users, followingUser) => {
  const isUser = users.find((user) => user._id === followingUser._id);

  if (isUser) {
    users = [...users].map((user) =>
      user._id === isUser._id ? followingUser : user
    );
  }

  return users;
};

//Updating user details

export const updateUser = createAsyncThunk(
  "user/getUpdate",
  async ({ bio, website, avatar, token }, { rejectWithValue }) => {
    try {
      const {
        data: { user },
        status,
      } = await axios.post(
        "/api/users/edit",
        {
          userData: {
            website: website,
            bio: bio,
            avatar: avatar,
            token: token,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 201) {
        toast.success("Profile successfully updated", {
          position: "top-right",
        });
        return user;
      }
    } catch (error) {
      return rejectWithValue("Try again later");
    }
  }
);

const getUpdateUser = (users, updateData) => {
  const findUser = users.find(
    (eachUser) => eachUser.username === updateData.username
  );

  if (findUser) {
    users = [...users].map((user) =>
      user.username === findUser.username ? updateData : user
    );
  }

  return users;
};

const initialState = {
  users: [],
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: {
    [getAllUserData.pending]: (state) => {
      state.loading = true;
    },

    [getAllUserData.fulfilled]: (state, action) => {
      state.loading = false;

      state.users = action.payload;
    },

    [getAllUserData.rejected]: (state, action) => {
      state.loading = false;
    },

    [followUser.fulfilled]: (state, action) => {
      const { followUser, user } = action.payload;

      // user as me
      // followUser which mean I follow
      state.users = updatingFollowingUser(current(state).users, user);
      state.users = updatingFollowedUser(current(state).users, followUser);
    },

    [unFollowUser.fulfilled]: (state, action) => {
      const { followUser, user } = action.payload;
      state.users = updatingFollowingUser(current(state).users, user);
      state.users = updatingFollowedUser(current(state).users, followUser);
    },

    [updateUser.fulfilled]: (state, action) => {
      state.users = getUpdateUser(current(state).users, action.payload);
    },
  },
});
export const userReducer = userSlice.reducer;
