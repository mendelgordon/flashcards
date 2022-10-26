/* create a slice of state for topics */
import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      /* the payloads will look like this:
     {id: '123456', name: 'name of topic', icon: 'icon url'} */
      const { id, name, icon } = action.payload;
      state.topics[id] = { name, icon };
      /* each topic object added to the state should also have a quizIds property, which will correspond to an array containing the ids of each quiz associated with the topic. When a topic is first created, it won’t have any associated quizzes, but you should still create an empty quizIds array so that all topics in the state conform to the same shape. */
      state.topics[id].quizIds = [];
    }
  }
});

/* selector that selects the topics object nested within initialState */
const selectTopics = (state) => state.topics.topics;

/* Export the selector as well as the action creators and reducer that the slice generates. */
export const { addTopic } = topicsSlice.actions;
export { selectTopics };
export default topicsSlice.reducer;
