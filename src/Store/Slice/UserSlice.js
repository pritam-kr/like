import { createSlice } from "@reduxjs/toolkit";
 

const STATUS = Object.freeze({
  DEFAULT: false,
  LOADING: true,
  ERROR: "",
});

const initialState = {
  users: [],
  status: STATUS.LOADING,
};

const userSlice = createSlice({

    name: "users",
    initialState,
    reducers: {
        getAllUsers: (state, Action) => {
            
        }
    }

})
