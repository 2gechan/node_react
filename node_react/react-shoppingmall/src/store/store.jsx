import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import userInfoReducer from "./userSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    userInfo: userInfoReducer,
  },
});

export default store;
