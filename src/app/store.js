import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardsReducer from "../features/cards/cardsSlice";
import { loadState, saveState } from "./localStorage";
import { debounce } from "./debounce";
const persistedState = loadState();

export const store = configureStore({
	reducer: {
		topics: topicsReducer,
		quizzes: quizzesReducer,
		cards: cardsReducer,
	},
	preloadedState: persistedState,
});

store.subscribe(
	debounce(() => {
		saveState({
			topics: store.getState().topics,
			quizzes: store.getState().quizzes,
			cards: store.getState().cards,
		});
	}, 1000)
);
