import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    loginStore: loginSlice,
  },
});

export default store;
