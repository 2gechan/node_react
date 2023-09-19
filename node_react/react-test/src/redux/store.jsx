import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    // counterReducer는 state이름에 Reducer가 붙어
    // "state이름"Reducer로 createSlice가 자동으로 생성해준다.
    counter: counterReducer,
  },
});

export default store;
