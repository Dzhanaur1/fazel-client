import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryValue: "",
  categoryValue: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQueryValue(state, action) {
      state.queryValue = "catalog?category=" + state.categoryValue;
    },
    setCategoryValue(state, action) {
      state.categoryValue = action.payload;
      console.log(state.queryValue);
    },
    removeCategoryValue(state, action) {
      state.categoryValue = "category=";
    },
    setOptiposValue(state, action) {},
  },
});
export const { setQueryValue, setCategoryValue, removeCategoryValue } =
  filterSlice.actions;
export default filterSlice.reducer;
