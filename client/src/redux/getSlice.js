import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const axios = require('axios');
const API_URL = 'https://localhost:3001';

export const getQuestions = createAsyncThunk(
  //action 이름
  'get/data',
  //처리할 비동기 함수
  async () => {
    const res = await axios.get(API_URL + '/data');
    // action의 payload 리턴
    return res.data;
  }
);

let initialState = {
  questionList: [],
  selectedQuestion: null,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getAllQuestion: (state, action) => {
      state.getQuestions = action.payload.data;
    },
    getSingleQuestion: (state, action) => {
      state.selectedQuestion = action.payload.data;
    },
  },
  extraReducers: {
    // eslint-disable-next-line no-undef
    [getQuestions.pending]: (state, action) => {
      console.log('pending');
    },
    // eslint-disable-next-line no-undef
    [getQuestions.fulfilled]: (state, action) => {
      state.questionList = action.payload;
      console.log('fulfilled');
    },
    // eslint-disable-next-line no-undef
    [getQuestions.rejected]: (state, action) => {
      console.log('rejected');
    },
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
