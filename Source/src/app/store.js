import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import jobsReducer from "../features/jobs/jobsSlice";
import jobsInfoReducer from "../features/jobsInfo/jobsInfoSlice";
import usersReducer from "../features/users/usersSlice";
import postsReducer from "../features/posts/postsSlice";
import currentUserReducer from "../features/currentUser/currentUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jobs: jobsReducer,
    jobsInfo: jobsInfoReducer,
    posts: postsReducer,
    users: usersReducer,
    currentUser: currentUserReducer,
  },
});
