import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  additem: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  additem: [0],
  totalAmount: 0,
  totalQuantity: 0,
};

export const counterSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    Addcart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity += actions.payload.quantity;
    },
    RemoveFromcart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity -= actions.payload.quantity;
    },
    clearCart:(state, actions: PayloadAction<any>) => {
        state.totalQuantity = initialState.totalQuantity;
    //   state.totalQuantity = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartAction = counterSlice.actions;

export default counterSlice.reducer;
