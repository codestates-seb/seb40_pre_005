import axios from 'axios';

export const getQuestionList = async () => {
  const res = await axios.get('http://localhost:3001/data');

  return res.data;
};
