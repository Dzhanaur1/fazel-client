const { createSlice } = require("@reduxjs/toolkit");
const data =
  typeof window !== "undefined" && localStorage.getItem("cart")
    ? getCartItemsFromLS()
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
    },
    reduceItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem?.count > 1) {
        findItem.count--;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      // state.totalPrice = calcTotalPrice(state.items);
    },
  },
});
export const { addItem, reduceItem } = cartSlice.actions;
export default cartSlice.reducer;
