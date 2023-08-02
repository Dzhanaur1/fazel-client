import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  filterValue: "",
  categoryValue: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = "catalog?" + state.filterValue + state.categoryValue;
    },
    setFilterValue(state, action) {
      state.filterValue = action.payload;
      console.log(state.filterValue);
    },
    removeFilterValue(state, action) {
      state.filterValue = "";
    },
  },
});
export const { setSearchValue, setFilterValue, removeFilterValue } =
  filterSlice.actions;
export default filterSlice.reducer;
