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
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
    toggleIsLoggedIn(state, action) {
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

export const {
  setIsError,
  setIsLoading,
  toggleIsLoggedIn,
  setUsers,
  setShowToast,
} = loginSlice.actions;

export default loginSlice.reducer;
