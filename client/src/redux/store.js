import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './getSlice';

const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});

export default store;
