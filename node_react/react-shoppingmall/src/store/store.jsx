import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import userInfoReducer from "./userSlice";
import curruntUserReducer from "./curruntUserSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    userInfo: userInfoReducer,
    curruntUser: curruntUserReducer,
  },
});

export default store;
