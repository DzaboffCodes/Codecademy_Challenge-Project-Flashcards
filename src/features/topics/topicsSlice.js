import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quzzesSlice';

// Initial State for the topics slice
const initialState = {
    topics: {}, // Object to hold topics keyed by their IDs
};

// Manage the state associated with topics
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = { id, name, icon, quizIds: [] }; // Add a new topic with its ID, name, icon, and an empty quizIds array
        }
    },
    extraReducers: {
        // Handle the case where a quiz is added, and we need to update the topic's quizIds
        [addQuiz]: (state, action) => {
            const { topicId, id } = action.payload; // Extract topicId and quiz ID from the action payload
            if (state.topics[topicId]) {
                state.topics[topicId].quizIds.push(id); // Add the quiz ID to the topic's quizIds array
            }
        }
    }
})

export const selectTopics = (state) => state.topics.topics; // Selector to get all topics from the state
export const { addTopic } = topicsSlice.actions; // Export the action creator for adding a topic
export default topicsSlice.reducer; // Export the reducer to be used in the store

// This slice manages the topics in the application, allowing for adding new topics and selecting existing ones.
// The initial state is set up to hold topics in an object format, where each topic can be accessed by its ID.
// The `addTopic` reducer allows for adding a new topic with its ID, name, icon, and an empty array for quiz IDs.
// The `selectTopics` selector provides a way to access the topics from the Redux state.
