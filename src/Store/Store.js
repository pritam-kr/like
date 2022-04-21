import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  authReducer from "./Slice/AuthSlice" 

   

  const store = configureStore({
      reducer: {
            auth: authReducer,
             
      }
  })

 export{ store} 