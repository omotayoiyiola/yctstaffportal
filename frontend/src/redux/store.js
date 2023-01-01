import { configureStore } from "@reduxjs/toolkit";
import userReducer, { loadUser } from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
store.dispatch(loadUser(null));
export default store;
