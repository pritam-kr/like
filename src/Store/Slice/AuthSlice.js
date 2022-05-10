import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// getting token and userInfo from local Storage
const token = localStorage.getItem("login-token") || ""
const userInfo = JSON.parse(localStorage.getItem("user")) || null

const initialState = {
  userInfo: userInfo,
  token: token,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInfo: (state, action) => {
      state.userInfo = action.payload
    },

    getToken: (state, action) => {
        state.token = action.payload
    }
  },
});

 
 

export const getUser = async () =>{

  try{

    const res = await axios.get("/api/users")

    console.log(res)

  }catch(error){
      console.log(error.response)
  }

}




export const { authInfo, getToken } = authSlice.actions;

export default authSlice.reducer;


