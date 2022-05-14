import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slice/PostSlice";
import  authReducer from "./Slice/AuthSlice" 
import bookmarkReducer from "./Slice/BookmarkSlice"
import { userReducer } from "./Slice/UserSlice";
 

   

  const store = configureStore({
      reducer: {
            auth: authReducer,
             post: postReducer,
             user: userReducer,
             bookmark: bookmarkReducer
      }
  })

 export{ store} 