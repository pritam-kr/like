import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slice/PostSlice";
import  authReducer from "./Slice/AuthSlice" 

   

  const store = configureStore({
      reducer: {
            auth: authReducer,
             post: postReducer
      }
  })

 export{ store} 