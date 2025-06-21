import { createSlice } from "@reduxjs/toolkit"; 

// initial state for cards
const initialState = {
  cards: {},
};

// create a slice for cards
const cardsSlice = createSlice({
    name: "cards",
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = { id, front, back };
        }
    }
});

// export actions
export const { addCard } = cardsSlice.actions;
// export selectors
export const selectCards = (state) => state.cards.cards;
// export reducer
export default cardsSlice.reducer;