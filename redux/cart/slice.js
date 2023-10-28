import { calcTotalPrice } from "@/utils/calcTotalPrice";
import { getCartFromLS } from "@/utils/getCartFromLS";

const { createSlice } = require("@reduxjs/toolkit");
const data =
  typeof window !== "undefined" && localStorage.getItem("cart")
    ? getCartFromLS()
    : {
        items: [],

        totalPrice: 0,
      };
const initialState = data;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    reduceItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem?.count > 1) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = calcTotalPrice(state.items);
      // state.totalPrice = calcTotalPrice(state.items);
    },
  },
});
export const { addItem, reduceItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
