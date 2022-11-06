import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswerEditor from './AnswerEditor';
import AnswerItem from './AnswerItem';

const AnswersWrapper = styled.div`
  padding: 24px 0;
`;

const AnswerList = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);
  const [pageInfo, setPageInfo] = useState();
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  //answer전체조회
  async function getAnswerList({ page, size }) {
    const res = await axios.get(
      `${process.env.REACT_APP_ANSWER}?page=${page}&size=${size}`
    );
    return res.data;
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnswerList({
        page: selectedPage,
        size: pageSize,
      });

      setPageInfo(data.pageInfo);
      setAnswers(data.data);
    };

    fetchData();
  }, [selectedPage, pageSize]);
  console.log(answers);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const url = `http://localhost:3001/answer?questionId=${questionId}`;
  //     // const url = `${process.env.REACT_APP_ANSWER}/${answerId}`;
  //     try {
  //       await axios.get(url).then((res) => {
  //         setAnswers(res.data);
  //         setPageInfo(res.pageInfo);
  //       });
  //     } catch (err) {
  //       console.log('error', err);
  //     }
  //   };
  //   fetchData();
  // }, [selectedPage, pageSize]);

  return (
    <AnswersWrapper>
      {answers
        ? answers.map((answer) => {
            return (
              <>
                <AnswerItem key={answer.answerId} answer={answer} />
              </>
            );
          })
        : null}
      <AnswerEditor questionId={questionId} />
    </AnswersWrapper>
  );
};

export default AnswerList;
