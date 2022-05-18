import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 

// getting token and userInfo from local Storage
const token = localStorage.getItem("login-token") || "";
const userInfo = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  userInfo: userInfo,
  token: token,
  loading: false,
  error: "",
};

export const logoutHandler = createAsyncThunk("auth/getLogout", () => {
  localStorage.removeItem("login-token");
  localStorage.removeItem("user");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    getToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: {
    [logoutHandler.fulfilled]: (state) => {
      state.userInfo = "";
      state.token = "";
    },
  },
});



export const { authInfo, getToken } = authSlice.actions;

export default authSlice.reducer;
