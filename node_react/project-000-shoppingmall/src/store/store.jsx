import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./CurrentUser";
import cartReducer from "./Cart";
const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    cart: cartReducer,
  },
});

export default store;
