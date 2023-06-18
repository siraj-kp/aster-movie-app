import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setSearchMovies: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchMovies } = searchSlice.actions;

export default searchSlice.reducer;
