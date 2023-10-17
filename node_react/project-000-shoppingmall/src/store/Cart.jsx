import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",

  initialState: { cart: [] },

  reducers: {
    setCartList: (state, action) => {},

    resetCart: (state) => {
      return [];
    },
  },
});

export const { setCartList, resetCart } = cart.actions;
export default cart.reducer;
