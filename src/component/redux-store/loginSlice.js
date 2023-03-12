import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  showToast: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    isError(state, action) {
      state.isError = action.payload;
    },
    isLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUsers(state, actions) {
      state.users = actions.payload;
    },
    setShowToast(state, action) {
      state.showToast = action.payload;
    },
  },
});

export const { isError, isLoading, isLoggedIn, setUsers, setShowToast } =
  loginSlice.actions;

export default loginSlice.reducer;
