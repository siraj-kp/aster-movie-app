import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeStyle: {
      background: {
        wrapper: "linear-gradient(180deg,#16181f,#0f1014 33.33%)",
        searchContainer: "#252846",
        SearchButton: "#000",
        MovieCard: "#16181f",
      },
      color: {
        wrapper: "#e1e6f0",
      },
    },
    dark: true,
  },
  reducers: {
    setTheme: (state, action) => {
      state.themeStyle = action.payload;
    },
    setDark: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const { setTheme, setDark } = themeSlice.actions;

export default themeSlice.reducer;
