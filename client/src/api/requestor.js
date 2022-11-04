import axios from 'axios';

const baseUrl =
  'http://ec2-3-39-250-169.ap-northeast-2.compute.amazonaws.com:8080';

// const baseUrl = 'http://localhost:3002';

export const getQuestionList = async ({ page, size }) => {
  const res = await axios.get(baseUrl + `/question?page=${page}&size=${size}`);

  return res.data;
};
