import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cart } from "../../utils/data";
const initialState: cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cart[]>) => {
      state.splice(0, state.length);
      action.payload.map((item) => {
        state.push(item);
      });
    },
    filterCart: (state, action) => {
      state.forEach((item, index) => {
        if (item._id === action.payload) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export const { addToCart, filterCart } = cartSlice.actions;

export default cartSlice.reducer;
