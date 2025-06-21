import { createSlice } from "@reduxjs/toolkit";

// Initial State for the quizzes slice
const initialState = {
    quizzes: {}, // Object to hold quizzes keyed by their IDs
};

// Manage the state associated with quizzes
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            const { id, topicId, name, cardIds } = action.payload;
            state.quizzes[id] = { id, topicId, name, cardIds }; // Add a new quiz with its ID, topicId, name, and cardIds
        }
    }
});
export const selectQuizzes = (state) => state.quizzes.quizzes; // Selector to get all quizzes from the state
export const { addQuiz } = quizzesSlice.actions; // Export the action creator for adding a quiz
export default quizzesSlice.reducer; // Export the reducer to be used in the store