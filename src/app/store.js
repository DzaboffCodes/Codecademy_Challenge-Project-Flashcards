import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer, // Reducer for managing topics
    quizzes: quizzesReducer, // Reducer for managing quizzes
  },
});
