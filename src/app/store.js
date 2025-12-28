import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postReducer,
  },
});

export default store;
