import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // queryValue: "",
  categoryValue: "",
  orderValue: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // setQueryValue(state, action) {
    //   state.queryValue = "catalog?category=" + state.categoryValue;
    // },
    setCategoryValue(state, action) {
      state.categoryValue = action.payload;
    },
    removeCategoryValue(state, action) {
      state.categoryValue = "";
    },
    setOrderValue(state, action) {
      state.orderValue = action.payload.toLowerCase();
    },
  },
});
export const { setOrderValue, setCategoryValue, removeCategoryValue } =
  filterSlice.actions;
export default filterSlice.reducer;
