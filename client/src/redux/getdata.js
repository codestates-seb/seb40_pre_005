import { questionActions } from './getSlice';

function getQuestionDetail() {
  return async (dispatch, getState) => {
    // eslint-disable-next-line no-undef
    let url = `https://localhost:3001/questions/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(questionActions.getAllQuestion({ data }));
  };
}

export const questionAction = getQuestionDetail;
