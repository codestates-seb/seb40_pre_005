import { configureStore, createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    userName: '',
    userEmail: '',
    userId: '',
    userPassword: '',
    userAccessToken: '',
    userRefreshToken: '',
  },
  reducers: {
    // login 성공 시
    loginUser: (state, action) => {
      // name, id에 API 값 받아오기

      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userAccessToken = action.payload.userAccessToken;
      state.userRefreshToken = action.payload.userRefreshToken;
      state.isLogin = true;
      // state 변화를 알림
      return state;
    },
    // login 실패 시
    clearUser: (state) => {
      // name, id 값을 비워줌.
      state.isLogin = false;
      state.userName = '';
      state.userEmail = '';
      state.userId = '';
      state.userAccessToken = '';
      state.userRefreshToken = '';
      // state 변화를 알림
      return state;
    },
  },
});

export const answerUser = createSlice({
  name: 'answerUser',
  initialState: 'hi',
  reducers: {
    addAnswerUser(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export let isLogin = createSlice({
  name: 'isLogin',
  initialState: false,
  reducers: {
    changeLogin(isLogin) {
      return !isLogin;
    },
  },
});

export const { changeLogin } = isLogin.actions;
export const { loginUser, clearUser } = user.actions;
export const { addAnswerUser } = answerUser.actions;

const store = configureStore({
  reducer: {
    user: user.reducer,
    isLogin: isLogin.reducer,
    answerUser: answerUser.reducer,
  },
});

export default store;
