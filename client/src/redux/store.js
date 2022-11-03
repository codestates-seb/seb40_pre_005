import { configureStore, createSlice } from '@reduxjs/toolkit';
import questionReducer from './getSlice';

export let user = createSlice({
  name: 'user',
  initialState: {
    userEmail: '',
    userPassword: '',
  },
});

const store = configureStore({
  reducer: {
    question: questionReducer,
    user: user.reducer,
  },
});

export default store;
