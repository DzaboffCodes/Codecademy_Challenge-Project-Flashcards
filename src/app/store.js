import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice.js";
import cardsReducer from "../features/cards/cardsSlice.js";

export default configureStore({
  reducer: {
    topics: topicsReducer, // Reducer for managing topics
    quizzes: quizzesReducer, // Reducer for managing quizzes
    cards: cardsReducer, // Reducer for managing cards
  },
});
