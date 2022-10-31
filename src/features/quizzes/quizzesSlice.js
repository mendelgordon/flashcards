import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const addQuizAndAssociateWithTopic = (quiz) => {
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizId({ quizId: quiz.id, topicId: quiz.topicId }));
  };
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = { name, topicId, cardIds, id };
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
