import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slice/PostSlice";
import  authReducer from "./Slice/AuthSlice" 
import { userReducer } from "./Slice/UserSlice";
 

   

  const store = configureStore({
      reducer: {
            auth: authReducer,
             post: postReducer,
             user: userReducer
      }
  })

 export{ store} 