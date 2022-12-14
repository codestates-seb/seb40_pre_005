import axios from 'axios';

const baseUrl =
  'http://ec2-3-39-250-169.ap-northeast-2.compute.amazonaws.com:8080';

// const baseUrl = 'http://localhost:3002';

export const getQuestionList = async ({ page, size }) => {
  const res = await axios.get(baseUrl + `/question?page=${page}&size=${size}`);

  return res.data;
};

export const getSpecificQuestion = async ({ questionId, page, size }) => {
  const res = await axios.get(
    `${process.env.REACT_APP_QUESTION}/find/${questionId}?page=${page}&size=${size}`
  );

  return res.data;
};

export const postQuestion = async ({ body, title, userId }) => {
  const userToken = localStorage.getItem('accessToken');

  const res = await axios.post(
    baseUrl + `/question/write`,
    {
      title,
      body,
      userId,
    },
    {
      headers: {
        Authorization: userToken,
      },
    }
  );

  return res.data;
};

export const deleteQuestion = async ({ questionId }) => {
  const res = await axios.delete(baseUrl + `/question/${questionId}`);

  return res.data;
};

export const updateQuestion = async ({ questionId, title, body }) => {
  const res = await axios.patch(baseUrl + `/question/${questionId}`, {
    title,
    body,
  });

  return res.data;
};
